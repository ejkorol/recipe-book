import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { Block } from "@prisma/client";

export const getAllBlocks = async (): Promise<Block[]> => {
  try {
    const blocks = await prisma.block.findMany()
    return blocks
  } catch (e: unknown) {
    throw handleError(e);
  };
}
