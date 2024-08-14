"use client";
"use strict";
exports.__esModule = true;
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var bind_1 = require("classnames/bind");
var link_1 = require("next/link");
var MainNavBar_module_scss_1 = require("./MainNavBar.module.scss");
var SearchIcon_1 = require("@/public/icons/SearchIcon");
var dynamic_1 = require("next/dynamic");
var cx = bind_1["default"].bind(MainNavBar_module_scss_1["default"]);
var LOGINPROFILE = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/profile/LoginProfile"); }); }, {
    ssr: false
});
function MainNavBar(_a) {
    var _b = _a.edit, edit = _b === void 0 ? false : _b;
    var _c = hooks_1.useAppSelector(authSlice_1.selectAuth), isLogin = _c.isLogin, userData = _c.userData;
    return (React.createElement("div", { className: cx("container") },
        React.createElement("div", { className: cx("navigation_container", { hidden: edit }) },
            React.createElement("nav", { className: cx("navigation") },
                React.createElement("ul", { className: cx("first_navigation_section") },
                    React.createElement(link_1["default"], { className: cx("link"), href: "/" }, "Home"),
                    React.createElement(link_1["default"], { className: cx("link"), href: "/board" }, "People's portfolio"),
                    React.createElement(link_1["default"], { className: cx("link"), href: "/myportpolio" }, "My portfolio")),
                React.createElement("div", { className: cx("second_navigation_section") },
                    React.createElement(SearchIcon_1["default"], { style: { width: "20px" } }),
                    React.createElement(LOGINPROFILE, { isLogin: isLogin, userData: userData }))))));
}
exports["default"] = MainNavBar;
