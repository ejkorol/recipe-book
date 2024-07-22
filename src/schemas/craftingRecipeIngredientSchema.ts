import { z } from 'zod';

const CraftingRecipeIngredientSchema = z.object({
  recipeId: z.string().min(1).max(255),
  itemId: z.string(),
  quantity: z.number()
}).strict();

export { CraftingRecipeIngredientSchema };
