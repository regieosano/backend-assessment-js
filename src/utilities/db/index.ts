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
        productCode: productData.productCode,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const productUpdate: Function = async (
  productData: ProductType,
  productId: number,
) => {
  try {
    await mindArcDB.product.update({
      where: {
        id: productId,
      },
      data: {
        title: productData.title,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const productDelete: Function = async (productId: number) => {
  try {
    const recordForDeletion = await mindArcDB.product.findFirst({
      where: {
        id: productId,
      },
    });

    if (recordForDeletion) {
      await mindArcDB.product.delete({
        where: {
          id: productId,
        },
      });
      return { message: "A record has been deleted" };
    }
    return { message: "Record does not exists" };
  } catch (error) {
    throw error;
  }
};

export const getProducts: Function = async (): Promise<ProductType[]> => {
  try {
    return await mindArcDB.product.findMany();
  } catch (error) {
    throw error;
  }
};
