import { Request, Response } from "express";
import { OreSchema } from '../schemas/oreSchema';
import { getAllOres as getAllOresService } from "../services/oreService";

export const getAllOres = async (_req: Request, res: Response) => {
  try {
    const ores = await getAllOresService();
    res.json(ores);
  } catch (e: any) {
    res.status(500).json({ error: e.errors });
  };
};

export const postOre = async (req: Request, res: Response) => {
  try {
    const ore = OreSchema.parse(req.body);
    res.json(ore);
  } catch (e: any) {
    res.status(400).json({ error: e.errors });
  };
};
