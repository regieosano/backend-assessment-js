"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes"));
const stringnummisc_1 = __importDefault(require("../constants/stringnummisc"));
const bodyParser = require("body-parser");
exports.default = async (app) => {
    app.use((0, cors_1.default)({
        credentials: true,
    }));
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    // source routes
    app.use(routes_1.default);
    // catch-all routes
    app.get(stringnummisc_1.default.api_main_slash, (req, res) => {
        res
            .status(stringnummisc_1.default.http_ok_code)
            .send(stringnummisc_1.default.api_root_response);
    });
    app.all(stringnummisc_1.default.api_all, (req, res) => {
        res
            .status(stringnummisc_1.default.not_found)
            .send(stringnummisc_1.default.non_existing_endpoint);
    });
    app.use((req, res) => {
        res
            .status(stringnummisc_1.default.internal_server_error_code)
            .send(stringnummisc_1.default.something_went_wrong);
    });
    return app;
};
//# sourceMappingURL=appService.js.map