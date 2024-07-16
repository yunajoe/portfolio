"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var Divider_module_scss_1 = require("./Divider.module.scss");
var cx = bind_1["default"].bind(Divider_module_scss_1["default"]);
function Divider(_a) {
    //  prop이 white로 고정되어 있땨.. 왜쥬?
    var customStyles = _a.customStyles, color = _a.color;
    var combinedStyles = __assign({}, customStyles);
    return React.createElement("div", { className: cx("divider"), style: customStyles });
}
exports["default"] = Divider;
