import { z } from 'zod';

const ItemAttributeSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string()
}).strict();

export { ItemAttributeSchema };
