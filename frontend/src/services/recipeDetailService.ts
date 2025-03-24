import { Recipe } from '@/interfaces/recipe';
import axios, { AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getRecipeDetails(id: string) {
  try {
    const response: AxiosResponse<Recipe> = await axios.get(
      `${API_URL}/recipes/details?id=${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function getRecipesByCategory(category: string) {
  try {
    const response: AxiosResponse<Recipe[]> = await axios.get(
      `${API_URL}/recipes/by-category?category=${category}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
