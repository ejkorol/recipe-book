import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllCraftingRecipeIngredients as getAllCraftingRecipeIngredientsService
} from "../services/craftingRecipeIngredientService";

export const getAllCraftingRecipeIngredients = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const craftingRecipeIngredients = await getAllCraftingRecipeIngredientsService();
    res.json(craftingRecipeIngredients);
  } catch (e) {
    next(handleError(e));
  };
};
