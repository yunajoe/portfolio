"use strict";
exports.__esModule = true;
var CheckBoxItem_1 = require("@/components/item/myprofile/withdrawl/CheckBoxItem");
var text_1 = require("@/constant/text");
var bind_1 = require("classnames/bind");
var WithDrawalSign_module_scss_1 = require("./WithDrawalSign.module.scss");
var cx = bind_1["default"].bind(WithDrawalSign_module_scss_1["default"]);
function WithDrawalSign(_a) {
    var agreeSelectOptions = _a.agreeSelectOptions, setAgreeSelectOptions = _a.setAgreeSelectOptions;
    return (React.createElement("div", { className: cx("container") },
        React.createElement(CheckBoxItem_1["default"], { agreeSelectOptions: agreeSelectOptions, setAgreeSelectOptions: setAgreeSelectOptions, type: "first", text: text_1.agreement_text_one }),
        React.createElement(CheckBoxItem_1["default"], { agreeSelectOptions: agreeSelectOptions, setAgreeSelectOptions: setAgreeSelectOptions, type: "second", text: text_1.agreement_text_two })));
}
exports["default"] = WithDrawalSign;
