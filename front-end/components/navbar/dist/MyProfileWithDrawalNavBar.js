"use client";
"use strict";
exports.__esModule = true;
var useLogOut_1 = require("@/hooks/useLogOut");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var link_1 = require("next/link");
var MyProfileWithDrawalNavBar_module_scss_1 = require("./MyProfileWithDrawalNavBar.module.scss");
var cx = bind_1["default"].bind(MyProfileWithDrawalNavBar_module_scss_1["default"]);
function MyProfileWithDrawalNavBar() {
    var handleLogout = useLogOut_1["default"]();
    return (React.createElement("header", null,
        React.createElement("div", { className: cx("container") },
            React.createElement(link_1["default"], { href: "/myprofile/setting", className: cx("link") }, "\uC124\uC815\uD398\uC774\uC9C0\uB85C\uAC00\uAE30"),
            React.createElement(core_1.UnstyledButton, { className: cx("button"), onClick: handleLogout }, "\uB85C\uADF8\uC544\uC6C3"))));
}
exports["default"] = MyProfileWithDrawalNavBar;
