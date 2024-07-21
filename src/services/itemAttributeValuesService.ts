import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { ItemAttributeValue } from "@prisma/client";

export const getAllItemAttributeValues = async (): Promise<ItemAttributeValue[]> => {
  try {
    const itemAttributeValues = await prisma.itemAttributeValue.findMany();
    return itemAttributeValues;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
