import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { NotFoundError } from "../utils/errors";
import { Item } from "@prisma/client";

export const getAllItems = async (): Promise<Item[]> => {
  try {
    const items = await prisma.item.findMany()
    return items
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const searchItem = async (query: string): Promise<Item[]> => {
  try {
    const numberQuery = !isNaN(Number(query)) ? Number(query) : null;

    if (numberQuery !== null) {
      return await prisma.item.findMany({
        where: {
          OR: [
            {
              id: numberQuery,
            },
            {
              stackSize: numberQuery,
            },
            {
              maxDurability: numberQuery,
            },
          ],
        },
      });
    };

    return await prisma.item.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query
            },
          },
          {
            displayName: {
              contains: query
            },
          },
          {
            repairWith: {
              array_contains: query
            },
          },
        ],
      },
    });
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const getItem = async (id: number): Promise<Item> => {
  try {
    const item = await prisma.item.findFirst({
      where: {
        id: id
      }
    });

    if (!item) {
      throw new NotFoundError("No item found with the given ID");
    };

    return item;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
