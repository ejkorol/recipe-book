import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { ItemAttribute } from "@prisma/client";
import { IItemAttribute } from "../../types/item";

export const getAllAttributes = async (): Promise<ItemAttribute[]> => {
  try {
    const attributes = await prisma.itemAttribute.findMany();
    return attributes;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const postAttribute = async (attributeData: IItemAttribute): Promise<ItemAttribute> => {
  try {

    const attribute = await prisma.itemAttribute.create({
      data: {
        name: attributeData.name,
        description: attributeData.description
      },
    });

    return attribute;
  } catch (e: unknown) {
    throw handleError(e);
  };
};


export const deleteAttribute = async (id: string): Promise<ItemAttribute> => {
  try {
    const deletedAttribute = await prisma.itemAttribute.delete({
      where: {
        id: id
      }
    });

    return deletedAttribute;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
