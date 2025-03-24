import { recipeService } from '@/services/recipeService';

export async function getRecipes({
  ingredient,
  country,
  category,
}: {
  ingredient?: string;
  country?: string;
  category?: string;
}) {
  if (ingredient) {
    return await recipeService.getRecipesByIngredient(ingredient);
  }
  if (country) {
    return await recipeService.getRecipesByCountry(country);
  }
  if (category) {
    return await recipeService.getRecipesByCategory(category);
  }
  return await recipeService.getAllRecipes();
}
