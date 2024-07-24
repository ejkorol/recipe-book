import { NotFoundError } from "../utils/errors";
import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { Biome } from "@prisma/client";

export const getAllBiomes = async (): Promise<Biome[]> => {
  try {
    const biomes = await prisma.biome.findMany();
    return biomes;
  } catch (e: unknown) {
    throw handleError(e);
  }
};

export const getBiomeById = async (id: number): Promise<Biome> => {
  try {
    const biome = await prisma.biome.findFirst({
      where: {
        id: id,
      },
    });

    if (!biome) {
      throw new NotFoundError("No biome found with the given ID");
    }

    return biome;
  } catch (e: unknown) {
    throw handleError(e);
  }
};

export const searchBiomes = async (query: string): Promise<Biome[]> => {
  try {
    const numberQuery = !isNaN(Number(query)) ? Number(query) : null;

    if (numberQuery !== null) {
      return await prisma.biome.findMany({
        where: {
          OR: [
            {
              id: numberQuery,
            },
            {
              temperature: numberQuery,
            },
            {
              color: numberQuery,
            },
            {
              rainfall: numberQuery,
            },
          ],
        },
      });
    }

    return await prisma.biome.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            category: {
              contains: query,
            },
          },
          {
            precipitation: {
                contains: query,
            },
          },
          {
            dimension: {
                contains: query,
            },
          },
          {
            displayName: {
                contains: query,
            },
          },
        ],
      },
    });
  } catch (e: unknown) {
    throw handleError(e);
  }
};
