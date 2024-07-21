import { Request, Response, NextFunction } from "express";
import { ItemSchema } from "../schemas/itemSchema";

import {
  getAllItems as getAllItemsService,
  postItem as postItemService
} from "../services/itemService";

export const getAllItems = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const items = await getAllItemsService();
    res.json(items);

  } catch (e) {
    next(e);
  };

};

export const postItem = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const itemData = ItemSchema.parse(req.body);
    const item = await postItemService(itemData);
    res.json(item);

  } catch (e) {
    next(e);
  };

};
