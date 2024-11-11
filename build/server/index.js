"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const appService_1 = __importDefault(require("../express/appService"));
const stringnummisc_1 = __importDefault(require("../constants/stringnummisc"));
dotenv_1.default.config();
const StartServer = async (server_status_message) => {
    const PORT = process.env.PORT || process.env.SERVER_PORT;
    const app = (0, express_1.default)();
    const serverApp = await (0, appService_1.default)(app);
    const server = http_1.default.createServer(app);
    server.listen(PORT, () => {
        console.log("\x1b[36m%s\x1b[0m", `${server_status_message} ${PORT}`);
    });
    return serverApp;
};
(async function runServerRun() {
    try {
        await StartServer(stringnummisc_1.default.server_running_message);
        console.log();
        console.log("System status...");
        console.log();
    }
    catch (error) {
        throw error;
    }
    process.on("uncaughtException", function (error) {
        console.error(new Date().toUTCString() + " uncaughtException:", error.message);
        console.error(error.stack);
        process.exit(1);
    });
})();
//# sourceMappingURL=index.js.map