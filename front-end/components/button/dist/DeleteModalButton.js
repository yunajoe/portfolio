"use strict";
exports.__esModule = true;
var DeleteModalButton_module_css_1 = require("@/components/button/DeleteModalButton.module.css");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var cx = bind_1["default"].bind(DeleteModalButton_module_css_1["default"]);
function DeleteModalButton(_a) {
    var onClose = _a.onClose, onConfirm = _a.onConfirm;
    return (React.createElement(core_1.Flex, { gap: "sm" },
        React.createElement(core_1.UnstyledButton, { className: cx("close_button"), ta: "center", onClick: onClose }, "\uB2EB\uAE30"),
        React.createElement(core_1.UnstyledButton, { className: cx("confirm_button"), ta: "center", onClick: onConfirm }, "\uD655\uC778")));
}
exports["default"] = DeleteModalButton;
