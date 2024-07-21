import { Request, Response } from "express";
import { ItemSchema } from "../schemas/itemSchema";

import {
  getAllItems as getAllItemsService,
  postItem as postItemService
} from "../services/itemService";

export const getAllItems = async (_req: Request, res: Response) => {
  try {
    const items = await getAllItemsService();
    res.json(items);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  };
};

export const postItem = async (req: Request, res: Response) => {
  try {
    const itemData = ItemSchema.parse(req.body);
    const item = await postItemService(itemData);
    res.json(item);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  };
};
