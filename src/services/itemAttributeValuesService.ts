import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { ItemAttributeValue } from "@prisma/client";
import { IItemAttributeValue } from "../../types/item";

export const getAllItemAttributeValues = async (): Promise<ItemAttributeValue[]> => {
  try {
    const itemAttributeValues = await prisma.itemAttributeValue.findMany();
    return itemAttributeValues;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const postItemAttributeValues = async (itemAttributeValueData: IItemAttributeValue): Promise<ItemAttributeValue> => {
  try {

    const itemAttributeValue = await prisma.itemAttributeValue.create({
      data: {
        itemId: itemAttributeValueData.itemId,
        attributeId: itemAttributeValueData.attributeId,
        value: itemAttributeValueData.value,
      },
    });

    return itemAttributeValue;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
