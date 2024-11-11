import express from "express";
import { getProducts } from "@src/services/products";
import { createProducts } from "@src/services/products/mutations";

const router = express.Router();

router.get(
  "/api/products",
  async (req: express.Request, res: express.Response) => {
    const messageObject = await getProducts();
    res.send(messageObject);
  },
);

router.post(
  "/api/products",
  async (req: express.Request, res: express.Response) => {
    const jsonResponse = await createProducts();
    res.send(jsonResponse);
  },
);

export default router;
