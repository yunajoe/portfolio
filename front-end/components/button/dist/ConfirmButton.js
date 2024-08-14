"use strict";
exports.__esModule = true;
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var react_1 = require("react");
var CareerConfirmButton_module_scss_1 = require("./CareerConfirmButton.module.scss");
var bind_1 = require("classnames/bind");
var cx = bind_1["default"].bind(CareerConfirmButton_module_scss_1["default"]);
function ConfirmButton(_a) {
    var 
    // isClick,
    setIsClick = _a.setIsClick, isSchoolItemClick = _a.isSchoolItemClick, setIsSchoolItemClick = _a.setIsSchoolItemClick, close = _a.close, 
    // searchValue,
    setSearchValue = _a.setSearchValue, setSearchResult = _a.setSearchResult, item = _a.item, schoolName = _a.schoolName, setSearchId = _a.setSearchId;
    var dispatch = hooks_1.useAppDispatch();
    var handleOnClick = function () {
        dispatch(portpolioSlice_1.educationFieldEdit({
            id: item.id,
            schoolName: schoolName,
            major: item.major,
            schoolDate: item.schoolDate,
            isCurrent: item.isCurrent
        }));
        close();
        setIsClick(false);
        setIsSchoolItemClick(false);
        setSearchValue("");
        setSearchResult([]);
        setSearchId(null);
    };
    return (react_1["default"].createElement(core_1.UnstyledButton, { className: cx("button", {
            "is-able": isSchoolItemClick,
            "is-disabled": !isSchoolItemClick
        }), onClick: handleOnClick, disabled: !isSchoolItemClick, ta: "center" }, "\uD655\uC778"));
}
exports["default"] = ConfirmButton;
