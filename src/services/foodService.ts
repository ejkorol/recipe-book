import { NotFoundError } from "../utils/errors";
import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { Food } from "@prisma/client";

export const getAllFood = async (): Promise<Food[]> => {
  try {
    const food = await prisma.food.findMany();
    return food;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const getFoodById = async (id: number): Promise<Food> => {
  try {
    const food = await prisma.food.findFirst({
      where: {
        id: id
      }
    });

    if (!food) {
      throw new NotFoundError("No food found with the given ID")
    };

    return food;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const searchFood = async (query: string): Promise<Food[]> => {
  try {
    const numberQuery = !isNaN(Number(query)) ? Number(query) : null;

    if (numberQuery !== null) {
      return await prisma.food.findMany({
        where: {
          OR: [
            {
              id: numberQuery,
            },
            {
              stackSize: numberQuery,
            },
            {
              foodPoints: numberQuery,
            },
            {
              saturation: numberQuery,
            },
            {
              effectiveQuality: numberQuery,
            },
            {
              saturationRatio: numberQuery,
            },
          ],
        },
      });
    };

    return await prisma.food.findMany({
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
        ],
      },
    });
  } catch (e: unknown) {
    throw handleError(e);
  };
};
