// import array from "lodash/array";

import * as workUtils from "./utils/index.js";
import * as workUtils2 from "./utils/index.js";

const install = function (Vue) {
    Vue.prototype["$workApi"] = {};
    Vue.prototype["$workUtils"] = { ...workUtils };
};

export { workUtils, workUtils2 };
export default { install };
