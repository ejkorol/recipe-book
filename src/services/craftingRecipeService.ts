import { CraftingRecipe } from "@prisma/client";
import { ICraftingRecipe } from "../../types/craftingRecipe";
import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";

export const getAllCraftingRecipes = async (): Promise<CraftingRecipe[]> => {
  try {
    const recipes = await prisma.craftingRecipe.findMany();
    return recipes;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const postCraftingRecipe = async (craftingRecipeData: ICraftingRecipe): Promise<CraftingRecipe> => {
  try {
    const craftingRecipe = await prisma.craftingRecipe.create({
      data: {
        resultItemId: craftingRecipeData.resultItemId,
        quantity: craftingRecipeData.quantity
      },
    });
    return craftingRecipe;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
