import { Request, Response } from "express";
import { OreSchema } from '../schemas/oreSchema';

import {
  getAllOres as getAllOresService,
  postOre as postOreService
} from "../services/oreService";

export const getAllOres = async (_req: Request, res: Response) => {
  try {
    const ores = await getAllOresService();
    res.json(ores);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  };
};

export const postOre = async (req: Request, res: Response) => {
  try {
    const oreData = OreSchema.parse(req.body);

    const ore = await postOreService(oreData);
    res.json(ore);

  } catch (e: any) {
    console.error('Error posting ore:', e);
    res.status(400).json({ error: e.errors || e.message });
  };
};
