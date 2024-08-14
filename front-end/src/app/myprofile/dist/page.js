"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var MyProfileBox_1 = require("@/components/box/myprofile/MyProfileBox");
var MyProfileBoxTwo_1 = require("@/components/box/myprofile/MyProfileBoxTwo");
var Divider_1 = require("@/components/divider/Divider");
var MainNavBar_1 = require("@/components/navbar/MainNavBar");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function Page() {
    return (React.createElement(React.Fragment, null,
        React.createElement(MainNavBar_1["default"], null),
        React.createElement("div", { className: cx("grid_container") },
            React.createElement(MyProfileBoxTwo_1["default"], null),
            React.createElement(Divider_1["default"], null),
            React.createElement(MyProfileBox_1["default"], null))));
}
exports["default"] = Page;
