export interface IRecipe {
  id: number;
  name: string;
  displayName: string;
  recipe: any[]|null;
  ingredients: any[]|null
  stackSize: number;
  quantity: number;
};
