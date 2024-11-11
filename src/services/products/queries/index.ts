import axios from "axios";
import { ProductType } from "@src/types";
import { productStorage } from "@src/utilities/db";

export const getProducts: Function = async (): Promise<Object> => {
  const prodObj: ProductType = {
    id: 0,
    productId: "",
    title: [],
    tags: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    productCode: [],
  };

  try {
    const response = await axios.get(process.env.PRODUCT_GET_URL || "");

    const productsArray = response.data.products;

    productsArray.map(async (product: any) => {
      prodObj.title = [];
      const skuArr: string[] = [];

      prodObj.productId = product.id.toString();
      prodObj.title.push(product.title);
      prodObj.tags = product.tags;
      prodObj.createdAt = product.created_at;
      prodObj.updatedAt = product.updated_at;

      // loop through the variants field and push sku's in the array
      product.variants.map((variant: any) => {
        prodObj.title.push(variant.title);
        skuArr.push(variant.sku);
      });

      prodObj.productCode = skuArr;

      await productStorage(prodObj);
    });

    return { message: "Successfully inserted records into database " };
  } catch (error: any) {
    throw new Error(error);
  }
};
