import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { Item } from "@prisma/client";

export const getAllItems = async (): Promise<Item[]> => {
  try {
    const items = await prisma.item.findMany()
    return items
  } catch (e: unknown) {
    throw handleError(e);
  };
};
