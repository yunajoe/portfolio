"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var Banner_module_scss_1 = require("./Banner.module.scss");
var cx = bind_1["default"].bind(Banner_module_scss_1["default"]);
//  carousel로 해보기?
function Banner() {
    return (React.createElement("div", { className: cx("") },
        React.createElement("picture", null,
            React.createElement("img", null)),
        React.createElement("button", null)));
}
exports["default"] = Banner;
