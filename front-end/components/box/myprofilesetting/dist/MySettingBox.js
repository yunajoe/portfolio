"use client";
"use strict";
exports.__esModule = true;
var ModalPortal_1 = require("@/components/modal/ModalPortal");
var PassWordChangeModal_1 = require("@/components/modal/type/PassWordChangeModal");
var useToast_1 = require("@/hooks/useToast");
var RightChevronIcon_1 = require("@/public/icons/RightChevronIcon");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var dynamic_1 = require("next/dynamic");
var link_1 = require("next/link");
var react_1 = require("react");
var MySettingBox_module_scss_1 = require("./MySettingBox.module.scss");
var cx = bind_1["default"].bind(MySettingBox_module_scss_1["default"]);
function MySettingBox() {
    var userData = hooks_1.useAppSelector(authSlice_1.selectAuth).userData;
    var _a = hooks_1.useAppSelector(statusSlice_1.selectStatus), updateUserPasswordStatus = _a.updateUserPasswordStatus, updateUserPasswordMessage = _a.updateUserPasswordMessage;
    var _b = react_1.useState(false), passwordChangeButton = _b[0], setPasswordChangeButton = _b[1];
    var handleOpenPasswordModal = function () {
        setPasswordChangeButton(true);
    };
    var handleClosePasswordModal = function () {
        setPasswordChangeButton(false);
    };
    useToast_1["default"]("password", updateUserPasswordStatus, updateUserPasswordMessage);
    var ProfileAvatar = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/avatar/ConditionCusTomAvatar"); }); }, { ssr: false });
    var MyProfileName = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/box/myprofile/MyProfileName"); }); }, { ssr: false });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: cx("profile_container") },
            React.createElement(ProfileAvatar, { userData: userData, size: "150px" }),
            React.createElement("div", { className: cx("profile_name_container") },
                React.createElement(MyProfileName, { userData: userData }),
                React.createElement(core_1.Text, { size: "30px", fw: 600 }, "\uB2D8, \uD658\uC601\uD574\uC694"))),
        React.createElement("div", { className: cx("profile_setting_container") },
            React.createElement(core_1.Text, { fw: 900, size: "24px", p: "15px" }, "\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638"),
            React.createElement("ul", null,
                React.createElement("li", { onClick: handleOpenPasswordModal },
                    React.createElement(core_1.Text, null, "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"),
                    React.createElement(RightChevronIcon_1["default"], { style: { width: "30px" } })),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "/myprofile/withdrawal", className: cx("user_withdrawal_text") },
                        React.createElement(core_1.Text, null, "\uD68C\uC6D0\uD0C8\uD1F4"),
                        React.createElement(RightChevronIcon_1["default"], { style: { width: "30px" } }))))),
        passwordChangeButton && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(PassWordChangeModal_1["default"], { userData: userData, title: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD", close: handleClosePasswordModal })))));
}
exports["default"] = MySettingBox;
