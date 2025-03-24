import { Controller, Get, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getAllRecipes() {
    return this.recipeService.getAllRecipes();
  }

  @Get('by-ingredient')
  async getRecipesByIngredient(@Query('ingredient') ingredient: string) {
    return this.recipeService.getRecipesByIngredient(ingredient);
  }

  @Get('by-country')
  async getRecipesByCountry(@Query('country') country: string) {
    return this.recipeService.getRecipesByCountry(country);
  }

  @Get('by-category')
  async getRecipesByCategory(@Query('category') category: string) {
    return this.recipeService.getRecipesByCategory(category);
  }

  @Get('details')
  async getRecipeDetails(@Query('id') id: string) {
    return this.recipeService.getRecipeDetails(id);
  }
}
