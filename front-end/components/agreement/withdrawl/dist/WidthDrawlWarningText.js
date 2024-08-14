"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var WithDrawalWarningText_module_scss_1 = require("./WithDrawalWarningText.module.scss");
var cx = bind_1["default"].bind(WithDrawalWarningText_module_scss_1["default"]);
function WithDrawalWarningText(_a) {
    var warningArray = _a.warningArray;
    return (React.createElement("ul", { className: cx("container") },
        React.createElement("li", null, warningArray.map(function (item, index) { return (React.createElement("div", { key: index },
            React.createElement(core_1.Text, { key: index, size: "lg", fw: 600 }, item.title),
            item.description.map(function (text, index) { return (React.createElement(core_1.Text, { key: index }, text)); }))); }))));
}
exports["default"] = WithDrawalWarningText;
