import { z } from 'zod';

const ItemAttributeValuesSchema = z.object({
  itemId: z.string().min(1).max(255),
  attributeId: z.string(),
  value: z.number(),
}).strict();

export { ItemAttributeValuesSchema };
