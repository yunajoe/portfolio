"use strict";
exports.__esModule = true;
var useOnClickOutside_1 = require("@/hooks/useOnClickOutside");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var DeleteDropDown_module_css_1 = require("./DeleteDropDown.module.css");
var cx = bind_1["default"].bind(DeleteDropDown_module_css_1["default"]);
function DeleteDropDown(_a) {
    var setDeleteDropDownId = _a.setDeleteDropDownId, handleChangeResumeName = _a.handleChangeResumeName;
    var ref = react_1.useRef(null);
    var handleClickOutside = function () {
        setDeleteDropDownId("");
    };
    useOnClickOutside_1["default"](ref, handleClickOutside);
    return (React.createElement("div", { className: cx("container"), ref: ref },
        React.createElement(core_1.UnstyledButton, { className: cx("menu"), onClick: handleChangeResumeName }, "\uC774\uB825\uC11C\uC774\uB984\uBCC0\uACBD"),
        React.createElement(core_1.UnstyledButton, { className: cx("menu") }, "\uC774\uB825\uC11C\uC0AD\uC81C")));
}
exports["default"] = DeleteDropDown;
