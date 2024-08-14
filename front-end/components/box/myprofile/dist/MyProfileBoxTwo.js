"use client";
"use strict";
exports.__esModule = true;
var Divider_1 = require("@/components/divider/Divider");
var useLogOut_1 = require("@/hooks/useLogOut");
var bind_1 = require("classnames/bind");
var MyProfileBoxTwo_module_scss_1 = require("./MyProfileBoxTwo.module.scss");
var cx = bind_1["default"].bind(MyProfileBoxTwo_module_scss_1["default"]);
function MyProfileBoxTwo(_a) {
    var _b = _a.show, show = _b === void 0 ? true : _b;
    var handleLogout = useLogOut_1["default"]();
    return (React.createElement("ul", { className: cx("menu_list", { remove: !show }) },
        React.createElement("li", null,
            React.createElement("span", { className: cx("text") }, "\uB0B4 \uD504\uB85C\uD544")),
        React.createElement("div", { className: cx("menu_list_divider") },
            React.createElement(Divider_1["default"], null)),
        React.createElement("li", { onClick: handleLogout },
            React.createElement("span", { className: cx("text") }, "\uB85C\uADF8\uC544\uC6C3"))));
}
exports["default"] = MyProfileBoxTwo;
