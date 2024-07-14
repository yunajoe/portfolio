"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var IntroBox_module_css_1 = require("./IntroBox.module.css");
var cx = bind_1["default"].bind(IntroBox_module_css_1["default"]);
function IntroBox(_a) {
    var introValue = _a.introValue, onChange = _a.onChange;
    return (react_1["default"].createElement("textarea", { placeholder: "\uC790\uAE30\uC18C\uAC1C\uB97C \uD574\uC8FC\uC138\uC694", className: cx("textarea"), value: introValue, onChange: onChange }));
}
exports["default"] = IntroBox;
