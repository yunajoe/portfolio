"use strict";
exports.__esModule = true;
var MyProfileEditModalButton_1 = require("@/components/button/MyProfileEditModalButton");
var MyProfileEditModalLayout_1 = require("@/components/layout/MyProfileEditModalLayout");
var MyProfileEditModalContent_1 = require("@/components/modal/content/MyProfileEditModalContent");
var MyProfileEditModalHeader_1 = require("@/components/modal/header/MyProfileEditModalHeader");
var bind_1 = require("classnames/bind");
var image_1 = require("next/image");
var ImageUploadModal_module_scss_1 = require("./ImageUploadModal.module.scss");
var cx = bind_1["default"].bind(ImageUploadModal_module_scss_1["default"]);
function ImageUploadModal(_a) {
    var title = _a.title, profileImageUrl = _a.profileImageUrl, close = _a.close, save = _a.save;
    return (React.createElement(MyProfileEditModalLayout_1["default"], null,
        React.createElement(MyProfileEditModalHeader_1["default"], { title: title, close: close }),
        React.createElement(MyProfileEditModalContent_1["default"], null,
            React.createElement("div", { className: cx("image_container") },
                React.createElement(image_1["default"], { src: profileImageUrl, alt: "profile_image", width: 500, height: 300 }))),
        React.createElement(MyProfileEditModalButton_1["default"], { close: close, save: save })));
}
exports["default"] = ImageUploadModal;
