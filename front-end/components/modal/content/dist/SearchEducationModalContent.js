"use strict";
exports.__esModule = true;
var ConfirmButton_1 = require("@/components/button/ConfirmButton");
var SearchInput_1 = require("@/components/input/SearchInput");
var SchoolSearchResult_1 = require("@/components/search/SchoolSearchResult");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var SearchModalContent_module_scss_1 = require("./SearchModalContent.module.scss");
var cx = bind_1["default"].bind(SearchModalContent_module_scss_1["default"]);
function SearchEducationModalContent(_a) {
    var data = _a.data, item = _a.item, searchValue = _a.searchValue, setSearchValue = _a.setSearchValue, setSearchResult = _a.setSearchResult, handleChangeFunc = _a.handleChangeFunc, isClick = _a.isClick, setIsClick = _a.setIsClick, isSchoolItemClick = _a.isSchoolItemClick, setIsSchoolItemClick = _a.setIsSchoolItemClick, close = _a.close, setSearchId = _a.setSearchId;
    return (react_1["default"].createElement("div", { className: cx("container") },
        react_1["default"].createElement(SearchInput_1["default"], { label: "\uD559\uAD50", placeholder: "\uD559\uAD50\uBA85 \uAC80\uC0C9", value: searchValue, handleChangeFunc: handleChangeFunc, setIsClick: setIsClick }),
        isClick && searchValue.length > 0 && (react_1["default"].createElement(SchoolSearchResult_1["default"], { data: data, searchValue: searchValue, setSearchValue: setSearchValue, setIsClick: setIsClick, setIsSchoolItemClick: setIsSchoolItemClick })),
        react_1["default"].createElement(ConfirmButton_1["default"]
        // isClick={isClick}
        , { 
            // isClick={isClick}
            setIsClick: setIsClick, isSchoolItemClick: isSchoolItemClick, setIsSchoolItemClick: setIsSchoolItemClick, close: close, 
            // searchValue={searchValue}
            setSearchValue: setSearchValue, setSearchResult: setSearchResult, item: item, schoolName: searchValue, setSearchId: setSearchId })));
}
exports["default"] = SearchEducationModalContent;
