"use strict";
exports.__esModule = true;
var useOnClickOutside_1 = require("@/hooks/useOnClickOutside");
var NonFillPersonIcon_1 = require("@/public/icons/NonFillPersonIcon");
var PencilIcon_1 = require("@/public/icons/PencilIcon");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var link_1 = require("next/link");
var react_1 = require("react");
var MyProfileDropDown_module_scss_1 = require("./MyProfileDropDown.module.scss");
var cx = bind_1["default"].bind(MyProfileDropDown_module_scss_1["default"]);
function MyProfileDropDown(_a) {
    var handleCloseSetting = _a.handleCloseSetting;
    var ref = react_1.useRef(null);
    useOnClickOutside_1["default"](ref, handleCloseSetting);
    return (React.createElement("div", { className: cx("container"), ref: ref },
        React.createElement("ul", { className: cx("myprofile_edit_container") },
            React.createElement(link_1["default"], { className: cx("item"), href: "/myprofile/edit" },
                React.createElement(PencilIcon_1["default"], null),
                React.createElement(core_1.Text, null, "\uD504\uB85C\uD544\uD3B8\uC9D1")),
            React.createElement(link_1["default"], { href: "/myprofile/setting", className: cx("item") },
                React.createElement(NonFillPersonIcon_1["default"], { style: { width: "25px", height: "25px" } }),
                React.createElement(core_1.Text, null, "\uACC4\uC815\uC124\uC815")))));
}
exports["default"] = MyProfileDropDown;
