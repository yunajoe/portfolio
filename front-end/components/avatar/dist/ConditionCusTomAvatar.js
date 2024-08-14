"use strict";
exports.__esModule = true;
var CusTomAvatar_1 = require("@/components/avatar/CusTomAvatar");
var image_1 = require("next/image");
function ConditionCusTomAvatar(_a) {
    var userData = _a.userData, _b = _a.borderRadius, borderRadius = _b === void 0 ? "0%" : _b, size = _a.size;
    return (React.createElement(React.Fragment, null, userData.userprofile.length > 0 ? (React.createElement("div", { style: { borderRadius: borderRadius, overflow: "hidden" } },
        React.createElement(image_1["default"], { alt: "profile_image", src: "http://localhost:8080/static/images/" + userData.userprofile }))) : (React.createElement(CusTomAvatar_1["default"], { userData: userData, size: size }))));
}
exports["default"] = ConditionCusTomAvatar;
