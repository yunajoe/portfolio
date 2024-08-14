"use strict";
exports.__esModule = true;
var FieldAddButtonLayout_1 = require("@/components/layout/FieldAddButtonLayout");
var useCustomNavigation_1 = require("@/hooks/useCustomNavigation");
var AddIcon_1 = require("@/public/icons/AddIcon");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var EducationAddButton_module_scss_1 = require("./EducationAddButton.module.scss");
var cx = bind_1["default"].bind(EducationAddButton_module_scss_1["default"]);
function EducationAddButton(_a) {
    var userData = _a.userData;
    var dispatch = hooks_1.useAppDispatch();
    var handleAddButton = function () {
        dispatch({
            type: "GET_PORT_POLIO_DEFAULT_REQUEST",
            _id: userData._id
        });
    };
    useCustomNavigation_1["default"]();
    return (React.createElement(FieldAddButtonLayout_1["default"], null,
        React.createElement(core_1.UnstyledButton, { className: cx("button"), onClick: handleAddButton },
            React.createElement(core_1.Text, null, "\uD559\uB825\uCD94\uAC00"),
            React.createElement(AddIcon_1["default"], { style: { width: "30px" } }))));
}
exports["default"] = EducationAddButton;
