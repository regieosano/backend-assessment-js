const jsonMerger = require("json-merger");

export default (function stringNumMiscObjectValues() {
  const messagesObject = jsonMerger.mergeFiles([
    "src/constants/stringnummisc/jsonvalues/http.json",
  ]);

  return (function () {
    return messagesObject;
  })();
})();
