import { RecipesType } from './RecipeType';
export interface IngredientsType {
  id: number;
  name: string;
  quantity: number;
  recipeId: number;
  recipe: RecipesType;
}

export interface CreateIngredient {
  name: string;
  quantity: number;
  recipeId: number;
}
