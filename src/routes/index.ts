import express from "express";
import { getProducts } from "@src/services/products";
import {
  createProducts,
  updateProducts,
  deleteProducts,
} from "@src/services/products/mutations/_index";

const router = express.Router();

router.get(
  process.env.MAIN_URL || "",
  async (req: express.Request, res: express.Response) => {
    const messageObject = await getProducts();
    res.send(messageObject);
  },
);

router.post(
  process.env.MAIN_URL || "",
  async (req: express.Request, res: express.Response) => {
    const jsonResponse = await createProducts();
    res.send(jsonResponse);
  },
);

router.put(
  process.env.MAIN_URL || "",
  async (req: express.Request, res: express.Response) => {
    const messageObject = await updateProducts();
    res.send(messageObject);
  },
);

router.delete(
  `${process.env.MAIN_URL}/:product_id`,
  async (req: express.Request, res: express.Response) => {
    const { product_id } = req.params;
    const productId = Number(product_id);
    const jsonResponse = await deleteProducts(productId);
    res.send(jsonResponse);
  },
);

export default router;
