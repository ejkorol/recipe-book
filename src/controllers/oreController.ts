import { Request, Response } from "express";
import { getAllOres as getAllOresService } from "../services/oreService";

export const getAllOres = async (_req: Request, res: Response) => {
  const ores = await getAllOresService();
  res.json(ores);
};
