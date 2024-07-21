import prisma from "../utils/prismaClient";
import { DatabaseError, UnknownError } from "../utils/errors";
import { isError } from "../utils/typeGuards";
import { ItemAttribute } from "@prisma/client";

export const getAllAttributes = async (): Promise<ItemAttribute[]> => {
  try {
    const attributes = await prisma.itemAttribute.findMany();
    return attributes;
  } catch (e: unknown) {
    if (isError(e)) {
      throw new DatabaseError(`Failed to fetch items: ${e.message}`);
    };
    throw new UnknownError();
  };
};
