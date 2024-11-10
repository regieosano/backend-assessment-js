import mindArcDB from "@src/utilities/prisma";
import { ProductType } from "@src/types";

export const productStorage: Function = async (productData: ProductType) => {
  try {
    await mindArcDB.product.create({
      data: {
        productId: productData.productId.toString(),
        title: productData.title,
        tags: productData.tags,
        createdAt: productData.createdAt,
        updatedAt: productData.updatedAt,
        sku: productData.skuArr,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
