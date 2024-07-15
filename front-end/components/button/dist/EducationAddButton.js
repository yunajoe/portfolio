"use strict";
exports.__esModule = true;
var FieldAddButtonLayout_1 = require("@/components/layout/FieldAddButtonLayout");
var AddIcon_1 = require("@/public/icons/AddIcon");
var core_1 = require("@mantine/core");
function EducationAddButton() {
    return (React.createElement(FieldAddButtonLayout_1["default"], null,
        React.createElement(core_1.UnstyledButton, null, "\uD559\uB825\uCD94\uAC00"),
        React.createElement(AddIcon_1["default"], { style: { width: "30px" } })));
}
exports["default"] = EducationAddButton;
