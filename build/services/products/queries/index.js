"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const db_1 = require("../../../utilities/db");
const getProducts = async () => {
    const prodObj = {
        id: 0,
        productId: "",
        title: [],
        tags: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        productCode: [],
    };
    try {
        const response = await axios_1.default.get(process.env.PRODUCT_GET_URL || "");
        const productsArray = response.data.products;
        productsArray.map(async (product) => {
            prodObj.title = [];
            const skuArr = [];
            prodObj.productId = product.id.toString();
            prodObj.title.push(product.title);
            prodObj.tags = product.tags;
            prodObj.createdAt = product.created_at;
            prodObj.updatedAt = product.updated_at;
            // loop through the variants field and push sku's in the array
            product.variants.map((variant) => {
                prodObj.title.push(variant.title);
                skuArr.push(variant.sku);
            });
            prodObj.productCode = skuArr;
            await (0, db_1.productStorage)(prodObj);
        });
        return { message: "Successfully inserted records into database " };
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.getProducts = getProducts;
//# sourceMappingURL=index.js.map