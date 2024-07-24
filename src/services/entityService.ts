import { NotFoundError } from "../utils/errors";
import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { Entity } from "@prisma/client";

export const getAllEntities = async (): Promise<Entity[]> => {
  try {
    const entities = await prisma.entity.findMany();
    return entities;
  } catch (e: unknown) {
    throw handleError(e);
  }
};

export const getEntityById = async (id: number): Promise<Entity> => {
  try {
    const entity = await prisma.entity.findFirst({
      where: {
        id: id,
      },
    });

    if (!entity) {
      throw new NotFoundError("No entity found with the given ID");
    }

    return entity;
  } catch (e: unknown) {
    throw handleError(e);
  }
};

export const getEntityBySearch = async (query: string): Promise<Entity[]> => {
  try {
    const numberQuery = !isNaN(Number(query)) ? Number(query) : null;

    if (numberQuery !== null) {
      return await prisma.entity.findMany({
        where: {
          OR: [
            {
              id: numberQuery,
            },
            {
                internalId: numberQuery,
            },
            {
                width: numberQuery,
            },
            {
                height: numberQuery,
            },
          ],
        },
      });
    }

    return await prisma.entity.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            displayName: {
              contains: query,
            },
          },
          {
            type: {
              contains: query,
            },
          },
          {
            category: {
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