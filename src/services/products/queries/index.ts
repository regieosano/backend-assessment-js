import axios from "axios";

export const getProducts: Function = async (): Promise<Object> => {
  try {
    const response = await axios.get(process.env.PRODUCT_URL || "");

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
