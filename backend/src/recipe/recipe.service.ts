import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import 'dotenv/config';
import { ConfigType } from 'src/config/config.type';
import { Recipe } from 'src/interfaces/recipe';

interface RecipeApiResponse {
  meals: Recipe[];
}

@Injectable()
export class RecipeService {
  baseUrl: string;
  constructor(private readonly configService: ConfigService<ConfigType>) {
    this.baseUrl = configService.getOrThrow('app.baseUrl', {
      infer: true,
    });
  }
  private async axiosRequest<T>(path: string) {
    const { data } = await axios.get<T>(`${this.baseUrl}/${path}`);

    return data;
  }

  async getAllRecipes(): Promise<Recipe[]> {
    try {
      const response =
        await this.axiosRequest<RecipeApiResponse>('/search.php?s=');

      return response.meals;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getRecipesByIngredient(ingredient: string): Promise<Recipe[]> {
    try {
      const response = await this.axiosRequest<RecipeApiResponse>(
        `/filter.php?i=${ingredient}`,
      );

      return response.meals;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getRecipesByCountry(country: string): Promise<Recipe[]> {
    try {
      const response = await this.axiosRequest<RecipeApiResponse>(
        `/filter.php?a=${country}`,
      );

      return response.meals;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getRecipesByCategory(category: string): Promise<Recipe[]> {
    try {
      const response = await this.axiosRequest<RecipeApiResponse>(
        `/filter.php?c=${category}`,
      );

      return response.meals;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getRecipeDetails(id: string): Promise<Recipe | null> {
    try {
      const response = await this.axiosRequest<RecipeApiResponse>(
        `/lookup.php?i=${id}`,
      );
      return response.meals ? response.meals[0] : null;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}
