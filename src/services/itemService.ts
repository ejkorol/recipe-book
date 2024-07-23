import { handleError } from "../utils/typeGuards";

export const getAllItems = async (): Promise<string> => {
  try {
    const items = "items"
    return items;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
