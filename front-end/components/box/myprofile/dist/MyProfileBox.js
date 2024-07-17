"use";
"use strict";
exports.__esModule = true;
var CusTomAvatar_1 = require("@/components/avatar/CusTomAvatar");
var MyProfileName_1 = require("@/components/box/mypofile/MyProfileName");
var CareerAddButton_1 = require("@/components/button/CareerAddButton");
var EducationAddButton_1 = require("@/components/button/EducationAddButton");
var bind_1 = require("classnames/bind");
var MyProfileBox_module_scss_1 = require("./MyProfileBox.module.scss");
var cx = bind_1["default"].bind(MyProfileBox_module_scss_1["default"]);
function MyProfileBox(_a) {
    // const useAuthSelector = useAppSelector(selectAuth);
    // console.log("userAuth", useAuthSelector);
    var userData = _a.userData;
    return (React.createElement("div", { className: cx("myprofile_container") },
        React.createElement("section", { className: cx("myinfo_section") },
            React.createElement("div", { className: cx("myinfo") },
                React.createElement(CusTomAvatar_1["default"], { userData: userData }),
                React.createElement(MyProfileName_1["default"], { userData: userData })),
            React.createElement("div", { className: cx("settings") }, "\uC124\uC815")),
        React.createElement("section", { className: cx("addbutton_section") },
            React.createElement(EducationAddButton_1["default"], null),
            React.createElement(CareerAddButton_1["default"], null))));
}
exports["default"] = MyProfileBox;
