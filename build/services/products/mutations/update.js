"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducts = void 0;
const db_1 = require("../../../utilities/db");
const updateProducts = async () => {
    try {
        const productsForUpdate = await (0, db_1.getProducts)();
        productsForUpdate.map(async (productForUpdate) => {
            // loop through the product codes and add it in the title
            productForUpdate.productCode.map((sku) => {
                productForUpdate.title.push(sku);
            });
            await (0, db_1.productUpdate)(productForUpdate, productForUpdate.id);
        });
        return { message: "DB has been updated" };
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.updateProducts = updateProducts;
//# sourceMappingURL=update.js.map