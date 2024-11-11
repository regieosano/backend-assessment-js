"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonMerger = require("json-merger");
exports.default = (function stringNumMiscObjectValues() {
    const messagesObject = jsonMerger.mergeFiles([
        "src/constants/stringnummisc/jsonvalues/http.json",
    ]);
    return (function () {
        return messagesObject;
    })();
})();
//# sourceMappingURL=index.js.map