import { z } from 'zod';

const ItemAttributeValueSchema = z.object({
  attributeId: z.string().uuid(),
  value: z.number().int().nonnegative()
});

const CraftingRecipeSchema = z.object({
  recipeId: z.string().uuid(),
  quantity: z.number().int().positive()
});

const ItemSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string(),
  image: z.string().url(),
  itemTypeId: z.string().uuid(),
  stackSize: z.number().int().positive(),
  durability: z.number().int().positive(),
  isMineable: z.boolean(),
  requiredToolId: z.string().uuid().nullable(),
  attributes: z.array(ItemAttributeValueSchema).optional(),
  recipes: z.array(CraftingRecipeSchema).optional()
});

export { ItemSchema };
