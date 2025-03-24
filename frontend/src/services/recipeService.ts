import { Recipe } from '@/interfaces/recipe';
import axios, { AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const recipeService = {
  async getAllRecipes() {
    try {
      const response: AxiosResponse<Recipe[]> = await axios.get(
        `${API_URL}/recipes`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },

  async getRecipesByIngredient(ingredient: string) {
    try {
      const response: AxiosResponse<Recipe[]> = await axios.get(
        `${API_URL}/recipes/by-ingredient?ingredient=${ingredient}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },

  async getRecipesByCountry(country: string) {
    try {
      const response: AxiosResponse<Recipe[]> = await axios.get(
        `${API_URL}/recipes/by-country?country=${country}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },

  async getRecipesByCategory(category: string) {
    try {
      const response: AxiosResponse<Recipe[]> = await axios.get(
        `${API_URL}/recipes/by-category?category=${category}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },
};
