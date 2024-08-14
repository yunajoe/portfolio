"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
function ProfileBox(_a) {
    var userData = _a.userData;
    return (React.createElement(React.Fragment, null,
        React.createElement(core_1.Text, null, userData.username),
        React.createElement(core_1.Text, null, userData.email)));
}
exports["default"] = ProfileBox;
