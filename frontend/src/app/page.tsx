import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getHomePageTitle } from '@/utils/getHomePageTitle';
import { getRecipes } from '@/utils/getRecipes';
import Image from 'next/image';
import Link from 'next/link';

interface RecipesProps {
  searchParams: Promise<{
    ingredient?: string;
    country?: string;
    category?: string;
  }>;
}

export default async function Recipes({ searchParams }: RecipesProps) {
  const { ingredient, country, category } = await searchParams;

  const recipes = await getRecipes({ ingredient, country, category });

  const title = getHomePageTitle({ ingredient, country, category });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        <Link href={'/'}>Home |</Link> {title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes?.map((recipe) => (
          <Link key={recipe.idMeal} href={`/recipe/${recipe.idMeal}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{recipe.strMeal}</CardTitle>
                <CardDescription>{recipe.strCategory}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width={300}
                  height={100}
                  className="rounded-lg object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
