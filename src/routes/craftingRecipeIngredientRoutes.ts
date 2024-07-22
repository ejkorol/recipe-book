import { Router } from "express";
import {
  getAllCraftingRecipeIngredients as getAllCraftingRecipeIngredientsController,
  postCraftingRecipeIngredient as postCraftingRecipeIngredientController
} from "../controllers/craftingRecipeIngredientController";

const router = Router();

router
  .get('/', getAllCraftingRecipeIngredientsController)
  .post('/', postCraftingRecipeIngredientController)

export default router;
