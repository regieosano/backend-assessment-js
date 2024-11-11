"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.productDelete = exports.productUpdate = exports.productStorage = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const productStorage = async (productData) => {
    try {
        await prisma_1.default.product.create({
            data: {
                productId: productData.productId.toString(),
                title: productData.title,
                tags: productData.tags,
                createdAt: productData.createdAt,
                updatedAt: productData.updatedAt,
                productCode: productData.productCode,
            },
        });
    }
    catch (error) {
        throw error;
    }
};
exports.productStorage = productStorage;
const productUpdate = async (productData, productId) => {
    try {
        await prisma_1.default.product.update({
            where: {
                id: productId,
            },
            data: {
                title: productData.title,
            },
        });
    }
    catch (error) {
        throw error;
    }
};
exports.productUpdate = productUpdate;
const productDelete = async (productId) => {
    try {
        const recordForDeletion = await prisma_1.default.product.findFirst({
            where: {
                id: productId,
            },
        });
        if (recordForDeletion) {
            await prisma_1.default.product.delete({
                where: {
                    id: productId,
                },
            });
            return { message: "A record has been deleted" };
        }
        return { message: "Record does not exists" };
    }
    catch (error) {
        throw error;
    }
};
exports.productDelete = productDelete;
const getProducts = async () => {
    try {
        return await prisma_1.default.product.findMany();
    }
    catch (error) {
        throw error;
    }
};
exports.getProducts = getProducts;
//# sourceMappingURL=index.js.map