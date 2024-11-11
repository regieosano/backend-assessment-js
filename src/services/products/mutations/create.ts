import axios from "axios";
import { ProductType } from "@src/types";
import { productStorage } from "@src/utilities/db";

export const createProducts: Function = async (): Promise<Object> => {
  const prodObjForPost: ProductType = {
    id: 0,
    productId: "",
    title: [],
    tags: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    productCode: [],
  };

  try {
    const dataForParsing = await axios.get(process.env.PRODUCT_POST_URL || "");

    const productsArray = dataForParsing.data.products;

    const returnArrayJSON: ProductType[] = [];

    productsArray.map(async (product: any) => {
      prodObjForPost.title = [];
      const skuArr: string[] = [];

      prodObjForPost.productId = product.id.toString();
      prodObjForPost.title.push(product.title);
      prodObjForPost.tags = product.tags;
      prodObjForPost.createdAt = product.created_at;
      prodObjForPost.updatedAt = product.updated_at;

      // loop through the variants field and push sku's in the array
      product.variants.map((variant: any) => {
        prodObjForPost.title.push(variant.title);
        skuArr.push(variant.sku);
      });

      prodObjForPost.productCode = skuArr;

      returnArrayJSON.push(prodObjForPost);

      await productStorage(prodObjForPost);
    });

    return returnArrayJSON;
  } catch (error: any) {
    throw new Error(error);
  }
};
