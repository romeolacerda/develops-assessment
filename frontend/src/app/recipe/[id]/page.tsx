import IngredientsList from '@/components/ingredientList';
import RelatedRecipesSidebar from '@/components/sidebar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getRecipeDetails,
  getRecipesByCategory,
} from '@/services/recipeDetailService';
import Image from 'next/image';
import Link from 'next/link';

interface RecipeDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetails({ params }: RecipeDetailsProps) {
  const { id } = await params;

  const recipe = await getRecipeDetails(id);
  const recipesByCategory = await getRecipesByCategory(recipe.strCategory);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {recipe.strMeal}
            </CardTitle>
            <Link href={`/?country=${recipe.strArea}`}>
              <Badge className="mt-2 cursor-pointer">{recipe.strArea}</Badge>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src={recipe?.strMealThumb}
                alt={recipe?.strMeal}
                width={500}
                height={400}
                className="w-full h-96 object-cover rounded-lg"
                priority
              />
              <div>
                <h3 className="text-xl font-semibold mb-4">Ingredients:</h3>
                <IngredientsList recipe={recipe} />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Instructions:</h3>
              <p className="text-gray-700">{recipe.strInstructions}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <RelatedRecipesSidebar
        recipes={recipesByCategory}
        category={recipe.strCategory}
      />
    </div>
  );
}
