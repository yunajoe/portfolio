"use strict";
exports.__esModule = true;
var user_1 = require("@/utils/user");
var core_1 = require("@mantine/core");
function CusTomAvatar(_a) {
    var userData = _a.userData;
    var initLetter = user_1.convertAvatarLetter(userData.username);
    var color = user_1.avatarColor[initLetter];
    return (React.createElement(core_1.Avatar, { size: "100px", color: color }, initLetter));
}
exports["default"] = CusTomAvatar;
