"use strict";
exports.__esModule = true;
var CusTomAvatar_1 = require("@/components/avatar/CusTomAvatar");
var image_1 = require("next/image");
function ConditionCusTomAvatar(_a) {
    var userData = _a.userData, _b = _a.borderRadius, borderRadius = _b === void 0 ? "0%" : _b, _c = _a.width, width = _c === void 0 ? 100 : _c, _d = _a.height, height = _d === void 0 ? 100 : _d;
    return (React.createElement(React.Fragment, null, userData.userprofile.length > 0 ? (React.createElement("div", { style: { borderRadius: borderRadius, overflow: "hidden" } },
        React.createElement(image_1["default"], { alt: "profile_image", src: "http://localhost:8080/static/images/" + userData.userprofile, width: width, height: height }))) : (React.createElement(CusTomAvatar_1["default"], { userData: userData, size: "100%" }))));
}
exports["default"] = ConditionCusTomAvatar;
