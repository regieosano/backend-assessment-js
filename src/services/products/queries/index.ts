import axios from "axios";
import { ProductType } from "@src/types";

export const getProducts: Function = async (): Promise<Object> => {
  const prodObj: ProductType = {
    id: "",
    title: "",
    tags: "",
    createdAt: null,
    updatedAt: null,
    sku: [],
  };

  try {
    const response = await axios.get(process.env.PRODUCT_URL || "");

    const productsArray = response.data.products;

    productsArray.map((product: any) => {
      prodObj.id = product.id;
      prodObj.title = product.title;
      prodObj.tags = product.tags;
      prodObj.createdAt = product.created_at;
      prodObj.updatedAt = product.updated_at;
      console.log(prodObj);
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
