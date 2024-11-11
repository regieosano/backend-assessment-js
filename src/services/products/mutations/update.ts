import { ProductType } from "@src/types";
import { getProducts, productUpdate } from "@src/utilities/db";

export const updateProducts: Function = async (): Promise<Object> => {
  try {
    const productsForUpdate = await getProducts();

    productsForUpdate.map(async (productForUpdate: ProductType) => {
      // loop through the product codes and add it in the title
      productForUpdate.productCode.map((sku: string) => {
        productForUpdate.title.push(sku);
      });

      await productUpdate(productForUpdate, productForUpdate.id);
    });

    return { message: "DB has been updated" };
  } catch (error: any) {
    throw new Error(error);
  }
};
