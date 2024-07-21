import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { ItemType } from "@prisma/client";
import { IItemType } from "../../types/item";

export const getAllTypes = async (): Promise<ItemType[]> => {
  try {
    const types = await prisma.itemType.findMany();
    return types;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const postType = async (typeData: IItemType): Promise<ItemType> => {
  try {
    const type = await prisma.itemType.create({
      data: {
        name: typeData.name,
        description: typeData.description
      },
    });
    return type;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
