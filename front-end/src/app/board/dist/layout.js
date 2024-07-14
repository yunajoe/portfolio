"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function BoardPageLayout(_a) {
    var children = _a.children;
    return react_1["default"].createElement("div", { className: cx("container") }, children);
}
exports["default"] = BoardPageLayout;
