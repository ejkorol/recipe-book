import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { CraftingRecipeIngredient } from "@prisma/client";
import { ICraftingRecipeIngredient } from "../../types/craftingRecipe";

export const getAllCraftingRecipeIngredients = async (): Promise<CraftingRecipeIngredient[]> => {
  try {
    const craftingRecipeIngredients = await prisma.craftingRecipeIngredient.findMany();
    return craftingRecipeIngredients;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const postCraftingRecipeIngredient = async (craftingRecipeIngredientData: ICraftingRecipeIngredient): Promise<CraftingRecipeIngredient> => {
  try {
    const craftingRecipeIngredient = await prisma.craftingRecipeIngredient.create({
      data: {
        recipeId: craftingRecipeIngredientData.recipeId,
        itemId: craftingRecipeIngredientData.itemId,
        quantity: craftingRecipeIngredientData.quantity
      },
    });
    return craftingRecipeIngredient;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
