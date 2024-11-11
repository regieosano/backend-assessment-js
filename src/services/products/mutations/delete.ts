import { productDelete } from "@src/utilities/db";

export const deleteProducts: Function = async (
  productId: number,
): Promise<Object> => {
  try {
    const message = await productDelete(productId);

    return message;
  } catch (error: any) {
    throw new Error(error);
  }
};
