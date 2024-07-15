"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var link_1 = require("next/link");
var MainNavBar_module_scss_1 = require("./MainNavBar.module.scss");
var cx = bind_1["default"].bind(MainNavBar_module_scss_1["default"]);
function MainNavBar() {
    return (React.createElement("div", { className: cx("container") },
        React.createElement("div", { className: cx("navigation_container") },
            React.createElement("nav", { className: cx("navigation") },
                React.createElement("ul", { className: cx("menubar_list") },
                    React.createElement("li", null, "test1"),
                    React.createElement("li", null, "test2"),
                    React.createElement("li", null, "test3")),
                React.createElement("aside", null,
                    React.createElement("ul", { className: cx("menubar_list") },
                        React.createElement("li", null, "test4"),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "/myprofile", scroll: false, style: { textDecoration: "none" } }, "\uB098\uC758 \uD504\uB85C\uD544"))))))));
}
exports["default"] = MainNavBar;
