import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { ItemType } from "@prisma/client";

export const getAllTypes = async (): Promise<ItemType[]> => {
  try {
    const types = await prisma.itemType.findMany();
    return types;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
