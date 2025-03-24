export function getHomePageTitle({
  ingredient,
  country,
  category,
}: {
  ingredient?: string;
  country?: string;
  category?: string;
}) {
  if (ingredient) return `Recipes with ${ingredient}`;
  if (country) return `${country} Recipes`;
  if (category) return `${category} Recipes`;
  return 'All Recipes';
}
