import { Router } from "express";
import {
  getAllCraftingRecipeIngredients as getAllCraftingRecipeIngredientsController
} from "../controllers/craftingRecipeIngredientController";

const router = Router();

router
  .get('/', getAllCraftingRecipeIngredientsController)

export default router;
