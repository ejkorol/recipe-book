import { z } from 'zod';

const CraftingRecipeSchema = z.object({
  resultItemId: z.string().min(1).max(255),
  quantity: z.number().positive()
}).strict();

export { CraftingRecipeSchema };
