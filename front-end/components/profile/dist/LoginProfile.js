"use strict";
exports.__esModule = true;
var ConditionCusTomAvatar_1 = require("@/components/avatar/ConditionCusTomAvatar");
var LinkButton_1 = require("@/components/button/LinkButton");
var link_1 = require("next/link");
function LoginProfile(_a) {
    var isLogin = _a.isLogin, userData = _a.userData;
    return (React.createElement("div", null, isLogin ? (React.createElement(link_1["default"], { href: "/myprofile", style: { textDecoration: "none" } },
        React.createElement(ConditionCusTomAvatar_1["default"], { userData: userData, width: 30, height: 30, borderRadius: "50%" }))) : (React.createElement(LinkButton_1["default"], { name: "\uD68C\uC6D0\uAC00\uC785/\uB85C\uADF8\uC778" }))));
}
exports["default"] = LoginProfile;
