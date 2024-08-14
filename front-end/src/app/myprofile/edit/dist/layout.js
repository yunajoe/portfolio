"use strict";
exports.__esModule = true;
var MyProfileEditNavBar_1 = require("@/components/navbar/MyProfileEditNavBar");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function MyProfileEditLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: cx("container") },
        react_1["default"].createElement(MyProfileEditNavBar_1["default"], null),
        children));
}
exports["default"] = MyProfileEditLayout;
