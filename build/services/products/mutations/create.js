"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const db_1 = require("../../../utilities/db");
const createProducts = async () => {
    const prodObjForPost = {
        id: 0,
        productId: "",
        title: [],
        tags: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        productCode: [],
    };
    try {
        const dataForParsing = await axios_1.default.get(process.env.PRODUCT_POST_URL || "");
        const productsArray = dataForParsing.data.products;
        const returnArrayJSON = [];
        productsArray.map(async (product) => {
            prodObjForPost.title = [];
            const skuArr = [];
            prodObjForPost.productId = product.id.toString();
            prodObjForPost.title.push(product.title);
            prodObjForPost.tags = product.tags;
            prodObjForPost.createdAt = product.created_at;
            prodObjForPost.updatedAt = product.updated_at;
            // loop through the variants field and push sku's in the array
            product.variants.map((variant) => {
                prodObjForPost.title.push(variant.title);
                skuArr.push(variant.sku);
            });
            prodObjForPost.productCode = skuArr;
            returnArrayJSON.push(prodObjForPost);
            await (0, db_1.productStorage)(prodObjForPost);
        });
        return returnArrayJSON;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.createProducts = createProducts;
//# sourceMappingURL=create.js.map