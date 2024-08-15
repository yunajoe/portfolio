"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var MyPortPolioEditButton_module_scss_1 = require("./MyPortPolioEditButton.module.scss");
var cx = bind_1["default"].bind(MyPortPolioEditButton_module_scss_1["default"]);
function MyPortPolioEditButton(_a) {
    var onClick = _a.onClick, introText = _a.introText, careerList = _a.careerList, educationList = _a.educationList;
    var isDisabled = introText.trim().length === 0 ||
        careerList.length === 0 ||
        educationList.length === 0;
    return (React.createElement("div", { className: cx("container") },
        React.createElement(core_1.UnstyledButton, { onClick: onClick, className: cx("button", { disabled: isDisabled }) }, "\uC791\uC131 \uC644\uB8CC")));
}
exports["default"] = MyPortPolioEditButton;
