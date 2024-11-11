"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = void 0;
const db_1 = require("../../../utilities/db");
const deleteProducts = async (productId) => {
    try {
        const message = await (0, db_1.productDelete)(productId);
        return message;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.deleteProducts = deleteProducts;
//# sourceMappingURL=delete.js.map