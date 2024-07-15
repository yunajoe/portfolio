"use strict";
exports.__esModule = true;
var MainNavBar_1 = require("@/components/navbar/MainNavBar");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function MyPortPolioListLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: cx("container") },
        react_1["default"].createElement(MainNavBar_1["default"], null),
        react_1["default"].createElement("div", { className: cx("body") },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("picture", null,
                    react_1["default"].createElement("img", null)),
                react_1["default"].createElement("button", null)),
            children)));
}
exports["default"] = MyPortPolioListLayout;
