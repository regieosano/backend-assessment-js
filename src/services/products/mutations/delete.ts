import { productDelete } from "@src/utilities/db";

export const deleteProducts: Function = async (
  productId: number,
): Promise<Object> => {
  try {
    await productDelete(productId);

    return { message: "A record has been deleted" };
  } catch (error: any) {
    throw new Error(error);
  }
};
