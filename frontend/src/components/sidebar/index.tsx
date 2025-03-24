import { Recipe } from '@/interfaces/recipe';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function RelatedRecipesSidebar({
  recipes,
  category,
}: {
  recipes: Recipe[];
  category: string;
}) {
  return (
    <div className=" h-screen flex flex-col md:w-1/3 w-full">
      <Card className="flex-1 h-screen overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Recipes in {category}
          </CardTitle>
        </CardHeader>
        <CardContent className="h-(100vh) overflow-y-auto">
          <ul className="space-y-2">
            {recipes?.map((relatedRecipe) => (
              <li key={relatedRecipe.idMeal}>
                <Link href={`/?category=${category}`}>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <Image
                      src={relatedRecipe.strMealThumb}
                      alt={relatedRecipe.strMeal}
                      width={400}
                      height={400}
                      className="w-20 h-20 object-cover rounded-lg"
                      priority
                    />
                    <span className="text-sm">{relatedRecipe.strMeal}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
