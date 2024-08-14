"use strict";
exports.__esModule = true;
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var react_1 = require("react");
var CareerConfirmButton_module_scss_1 = require("./CareerConfirmButton.module.scss");
var bind_1 = require("classnames/bind");
var cx = bind_1["default"].bind(CareerConfirmButton_module_scss_1["default"]);
function CareerConfirmButton(_a) {
    var 
    // isClick,
    setIsClick = _a.setIsClick, isCompanyItemClick = _a.isCompanyItemClick, 
    // setIsCompanyItemClick,
    close = _a.close, searchValue = _a.searchValue, setSearchValue = _a.setSearchValue, statusValue = _a.statusValue, setSearchResult = _a.setSearchResult, item = _a.item, setSearchId = _a.setSearchId;
    var dispatch = hooks_1.useAppDispatch();
    var handleOnClick = function () {
        dispatch(portpolioSlice_1.careerFieldEdit({
            id: item.id,
            companyName: searchValue,
            status: statusValue,
            position: item.position,
            companyDate: item.companyDate,
            isCurrent: item.isCurrent
        }));
        close();
        setIsClick(false);
        setSearchValue("");
        setSearchResult([]);
        setSearchId(null);
    };
    return (react_1["default"].createElement(core_1.UnstyledButton, { className: cx("button", {
            "is-able": isCompanyItemClick,
            "is-disabled": !isCompanyItemClick
        }), onClick: handleOnClick, disabled: !isCompanyItemClick, ta: "center" }, "\uD655\uC778"));
}
exports["default"] = CareerConfirmButton;
