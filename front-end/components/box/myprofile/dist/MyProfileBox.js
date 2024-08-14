"use client";
"use strict";
exports.__esModule = true;
var CareerAddButton_1 = require("@/components/button/CareerAddButton");
var EducationAddButton_1 = require("@/components/button/EducationAddButton");
var MyProfileDropDown_1 = require("@/components/dropdown/MyProfileDropDown");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var dynamic_1 = require("next/dynamic");
var react_1 = require("react");
var MyProfileBox_module_scss_1 = require("./MyProfileBox.module.scss");
var cx = bind_1["default"].bind(MyProfileBox_module_scss_1["default"]);
function MyProfileBox() {
    var _a = react_1.useState(false), setting = _a[0], setSettings = _a[1];
    var userData = hooks_1.useAppSelector(authSlice_1.selectAuth).userData;
    var handleOpenSetting = function () {
        setSettings(true);
    };
    var handleCloseSetting = function () {
        setSettings(false);
    };
    var MyProfileName = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/box/myprofile/MyProfileName"); }); }, { ssr: false });
    var ProfileAvatar = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/avatar/ConditionCusTomAvatar"); }); }, { ssr: false });
    return (React.createElement("div", { className: cx("myprofile_container") },
        React.createElement("section", { className: cx("myinfo_section") },
            React.createElement("div", { className: cx("myinfo") },
                React.createElement(ProfileAvatar, { userData: userData, size: "100px", borderRadius: "9999px" }),
                React.createElement(MyProfileName, { userData: userData })),
            React.createElement("div", { className: cx("settings") },
                React.createElement(core_1.UnstyledButton, { className: cx("settings_button"), onClick: handleOpenSetting }, "\uC124\uC815"),
                setting && (React.createElement(MyProfileDropDown_1["default"], { handleCloseSetting: handleCloseSetting })))),
        React.createElement("section", { className: cx("addbutton_section") },
            React.createElement(EducationAddButton_1["default"], { userData: userData }),
            React.createElement(CareerAddButton_1["default"], { userData: userData }))));
}
exports["default"] = MyProfileBox;
