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
var CheckIcon_1 = require("@/public/icons/CheckIcon");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var CheckBoxItem_module_scss_1 = require("./CheckBoxItem.module.scss");
var cx = bind_1["default"].bind(CheckBoxItem_module_scss_1["default"]);
function CheckBoxItem(_a) {
    var type = _a.type, text = _a.text, agreeSelectOptions = _a.agreeSelectOptions, setAgreeSelectOptions = _a.setAgreeSelectOptions;
    var option = type === "first"
        ? agreeSelectOptions.first_option
        : agreeSelectOptions.second_option;
    var handleFirstOption = function () {
        setAgreeSelectOptions(function (prev) {
            return __assign(__assign({}, prev), { first_option: !prev.first_option });
        });
    };
    var handleSecondOption = function () {
        setAgreeSelectOptions(function (prev) {
            return __assign(__assign({}, prev), { second_option: !prev.second_option });
        });
    };
    return (React.createElement("div", { className: cx("checkbox") },
        React.createElement(core_1.UnstyledButton, { className: cx("checkbox_button", { hidden: !option }), onClick: type === "first" ? handleFirstOption : handleSecondOption },
            React.createElement("span", { className: cx("checkbox_icon", { hidden: !option }) },
                React.createElement(CheckIcon_1["default"], { style: { width: "20px" } }))),
        React.createElement("input", { id: "agreement", type: "checkbox", required: true, className: cx("checkbox_input") }),
        React.createElement("div", null,
            React.createElement("p", null, text))));
}
exports["default"] = CheckBoxItem;
