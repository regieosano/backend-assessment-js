"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../services/products");
const _index_1 = require("../services/products/mutations/_index");
const router = express_1.default.Router();
router.get(process.env.MAIN_URL || "", async (req, res) => {
    const messageObject = await (0, products_1.getProducts)();
    res.send(messageObject);
});
router.post(process.env.MAIN_URL || "", async (req, res) => {
    const jsonResponse = await (0, _index_1.createProducts)();
    res.send(jsonResponse);
});
router.put(process.env.MAIN_URL || "", async (req, res) => {
    const messageObject = await (0, _index_1.updateProducts)();
    res.send(messageObject);
});
router.delete(`${process.env.MAIN_URL}/${process.env.DELETE_DATA}`, async (req, res) => {
    const { product_id } = req.params;
    const productId = Number(product_id);
    const jsonResponse = await (0, _index_1.deleteProducts)(productId);
    res.send(jsonResponse);
});
exports.default = router;
//# sourceMappingURL=index.js.map