import express from "express";
import { getProducts } from "@src/services/products";
import {
  createProducts,
  updateProducts,
} from "@src/services/products/mutations";

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
    const jsonResponse = await updateProducts();
    res.send(jsonResponse);
  },
);

export default router;
