import { Recipe } from '@/interfaces/recipe';
import Link from 'next/link';
import { Badge } from '../ui/badge';

export default function IngredientsList({ recipe }: { recipe: Recipe }) {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
        const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
        return ingredient ? (
          <li key={i}>
            <Link href={`/?ingredient=${ingredient}`}>
              <Badge variant="outline" className="cursor-pointer">
                {ingredient}
              </Badge>
            </Link>
          </li>
        ) : null;
      })}
    </ul>
  );
}
