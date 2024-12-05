export interface RecipesType {
  id: number;
  name: string;
  description: string;
  cuisine: string;
  createdDate: string;
}

export interface CreateRecipes {
  name: string;
  description: string;
  cuisine: string;
  createdDate: string;
}
