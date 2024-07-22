import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllCraftingRecipes as getAllCraftingRecipesService,
  postCraftingRecipe as postCraftingRecipeService
} from "../services/craftingRecipeService";
import { CraftingRecipeSchema } from "../schemas/craftingRecipeSchema";

export const getAllCraftingRecipes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const recipes = await getAllCraftingRecipesService();
    res.json(recipes);
  } catch (e) {
    next(handleError(e));
  };
};

export const postCraftingRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {

    const craftingRecipeData = CraftingRecipeSchema.parse(req.body);
    const craftingRecipe = await postCraftingRecipeService(craftingRecipeData);
    res.json(craftingRecipe);
  } catch (e) {
    next(handleError(e));
  };
};
