"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var navigation_1 = require("next/navigation");
var FloatingButton_module_scss_1 = require("./FloatingButton.module.scss");
var cx = bind_1["default"].bind(FloatingButton_module_scss_1["default"]);
function FloatingButton(_a) {
    var text = _a.text;
    var router = navigation_1.useRouter();
    var handleGoBack = function () {
        router.push("/board");
    };
    return (React.createElement("div", { className: cx("button_container") },
        React.createElement(core_1.UnstyledButton, { className: cx("button"), onClick: handleGoBack }, text),
        ";"));
}
exports["default"] = FloatingButton;
