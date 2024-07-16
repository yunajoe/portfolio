"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var MyProfileName_module_scss_1 = require("./MyProfileName.module.scss");
var cx = bind_1["default"].bind(MyProfileName_module_scss_1["default"]);
function MyProfileName(_a) {
    var userData = _a.userData;
    return React.createElement("span", { className: cx("username") }, userData.username);
}
exports["default"] = MyProfileName;
