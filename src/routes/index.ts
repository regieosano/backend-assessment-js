import express from "express";
import { getProducts } from "@src/services/products";

const router = express.Router();

router.get(
  "/api/products",
  async (req: express.Request, res: express.Response) => {
    const products = await getProducts();
    res.send(products);
  },
);

export default router;
