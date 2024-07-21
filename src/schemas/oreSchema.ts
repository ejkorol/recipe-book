import { z } from 'zod';

const DropSchema = z.object({
  item: z.string(),
  quantity: z.number().int(),
});

const OreSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string(),
  hardness: z.number(),
  blastResistance: z.number(),
  toolRequired: z.string(),
  minableWith: z.array(z.string()),
  drops: z.array(DropSchema),
  texture: z.string(),
  color: z.string(),
});

export { OreSchema };
