import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { NotFoundError } from "../utils/errors";
import { Block } from "@prisma/client";

export const getAllBlocks = async (): Promise<Block[]> => {
  try {
    const blocks = await prisma.block.findMany()
    return blocks
  } catch (e: unknown) {
    throw handleError(e);
  };
}

export const getBlock = async (id: number): Promise<Block> => {
  try {
    const block = await prisma.block.findFirst({
      where: {
        id: id
      }
    });

    if (!block) {
      throw new NotFoundError("No food found with the given ID")
    };

    return block;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const searchBlock = async (query: string): Promise<Block[]> => {
  try {
    const numberQuery = !isNaN(Number(query)) ? Number(query) : null;

    if (numberQuery !== null) {
      return await prisma.block.findMany({
        where: {
          OR: [
            {
              id: numberQuery,
            },
            {
              hardness: numberQuery,
            },
            {
              resistance: numberQuery,
            },
            {
              stackSize: numberQuery,
            },
            {
              emitLight: numberQuery,
            },
            {
              filterLight: numberQuery,
            },
            {
              defaultState: numberQuery,
            },
            {
              minStateId: numberQuery,
            },
            {
              maxStateId: numberQuery,
            },
          ],
        },
      });
    };

    return await prisma.block.findMany({
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
            material: {
              contains: query
            }
          },
          {
            boundingBox: {
              contains: query
            }
          }
        ],
      },
    });
  } catch (e: unknown) {
    throw handleError(e);
  };
};
