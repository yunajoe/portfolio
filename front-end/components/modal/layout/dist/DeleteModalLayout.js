"use strict";
exports.__esModule = true;
var ModalBase_1 = require("@/components/modal/ModalBase");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var DeleteModalLayout_module_css_1 = require("./DeleteModalLayout.module.css");
var cx = bind_1["default"].bind(DeleteModalLayout_module_css_1["default"]);
function DeleteModalLayout(_a) {
    var children = _a.children;
    return (React.createElement(ModalBase_1["default"], null,
        React.createElement("div", { className: cx("modal") },
            React.createElement(core_1.Stack, null,
                React.createElement(core_1.Text, { ta: "center", fz: "md" }, "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                React.createElement(core_1.Divider, null),
                children))));
}
exports["default"] = DeleteModalLayout;
