"use strict";
exports.__esModule = true;
var CusTomAvatar_1 = require("@/components/avatar/CusTomAvatar");
var image_1 = require("next/image");
function ConditionCusTomAvatar(_a) {
    var userData = _a.userData, borderRadius = _a.borderRadius, size = _a.size, _b = _a.width, width = _b === void 0 ? 200 : _b, _c = _a.height, height = _c === void 0 ? 200 : _c;
    return (React.createElement(React.Fragment, null, userData.userprofile.length > 0 ? (React.createElement("div", { style: { borderRadius: borderRadius, overflow: "hidden" } },
        React.createElement(image_1["default"], { alt: "profile_image", src: "http://localhost:8080/static/images/" + userData.userprofile, width: width, height: height }))) : (React.createElement(CusTomAvatar_1["default"], { userData: userData, size: size }))));
}
exports["default"] = ConditionCusTomAvatar;
