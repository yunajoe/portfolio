"use strict";
exports.__esModule = true;
var ConditionCusTomAvatar_1 = require("@/components/avatar/ConditionCusTomAvatar");
var AddIcon_1 = require("@/public/icons/AddIcon");
var RightChevronIcon_1 = require("@/public/icons/RightChevronIcon");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var MyProfileEditBoxBody_module_scss_1 = require("./MyProfileEditBoxBody.module.scss");
var cx = bind_1["default"].bind(MyProfileEditBoxBody_module_scss_1["default"]);
function MyProfileEditBoxBody(_a) {
    var setProfileFormData = _a.setProfileFormData, setProfileImageUrl = _a.setProfileImageUrl, setProfileUserNickNameButton = _a.setProfileUserNickNameButton;
    var userData = hooks_1.useAppSelector(authSlice_1.selectAuth).userData;
    var handleImageChange = function (e) {
        var file = e.target.files;
        if (!file)
            return;
        var fileInfo = file[0];
        setProfileFormData(fileInfo);
        var imageUrl = URL.createObjectURL(fileInfo);
        setProfileImageUrl(imageUrl);
    };
    var handleOpenUserNickName = function () {
        setProfileUserNickNameButton(true);
    };
    return (React.createElement("section", { className: cx("second_section") },
        React.createElement("div", { className: cx("user_profile_image_container") },
            React.createElement(ConditionCusTomAvatar_1["default"], { userData: userData, size: "150px" }),
            React.createElement("div", { className: cx("user_profile_image") },
                React.createElement("label", { htmlFor: "profile_image_uploads" },
                    React.createElement("input", { id: "profile_image_uploads", name: "profile_image_uploads", accept: "image/png, image/jpeg, image/jpg", type: "file", style: { display: "none" }, onChange: handleImageChange }),
                    React.createElement("span", { className: cx("add_icon_container") },
                        React.createElement(core_1.Badge, { circle: true, size: "30px", color: "white", style: {
                                cursor: "pointer"
                            } },
                            React.createElement(AddIcon_1["default"], { style: { width: "20px", color: "gray", textAlign: "center" } })))))),
        React.createElement("div", { className: cx("user_nickname_container") },
            React.createElement("span", { className: cx("user_nickname") }, "\uB2C9\uB124\uC784"),
            React.createElement(core_1.UnstyledButton, { className: cx("user_nickname_button"), onClick: handleOpenUserNickName },
                React.createElement("span", null, userData.username),
                React.createElement(RightChevronIcon_1["default"], { style: { color: "gray" } })))));
}
exports["default"] = MyProfileEditBoxBody;
