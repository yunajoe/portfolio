"use strict";
exports.__esModule = true;
var MyProfileWithDrawalNavBar_1 = require("@/components/navbar/MyProfileWithDrawalNavBar");
var bind_1 = require("classnames/bind");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function MyProfileWidthDrawlLayout(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(MyProfileWithDrawalNavBar_1["default"], null),
        React.createElement("div", { className: cx("container") }, children)));
}
exports["default"] = MyProfileWidthDrawlLayout;
