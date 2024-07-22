import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";

export const getAllCraftingRecipes = async () => {
  try {
    const recipes = await prisma.craftingRecipe.findMany();
    return recipes;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
