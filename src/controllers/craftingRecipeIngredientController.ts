import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";
import { CraftingRecipeIngredientSchema } from "../schemas/craftingRecipeIngredientSchema";

import {
  getAllCraftingRecipeIngredients as getAllCraftingRecipeIngredientsService,
  postCraftingRecipeIngredient as postCraftingRecipeIngredientService
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

export const postCraftingRecipeIngredient = async (
  req: Request,
  res: Response,
  next: NextFunction) => {
  
  try {

    const craftingRecipeIngredientData = CraftingRecipeIngredientSchema.parse(req.body);
    const craftingRecipeIngredient = await postCraftingRecipeIngredientService(craftingRecipeIngredientData);
    res.json(craftingRecipeIngredient);
  } catch (e) {
    next(handleError(e));
  };
};
