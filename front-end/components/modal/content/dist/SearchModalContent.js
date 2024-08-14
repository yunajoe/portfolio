"use strict";
exports.__esModule = true;
var CareerConfirmButton_1 = require("@/components/button/CareerConfirmButton");
var StatusDropdown_1 = require("@/components/dropdown/StatusDropdown");
var SearchInput_1 = require("@/components/input/SearchInput");
var CompanySearchResult_1 = require("@/components/search/CompanySearchResult");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var DropdownInput_1 = require("../../input/DropdownInput");
var SearchModalContent_module_scss_1 = require("./SearchModalContent.module.scss");
var cx = bind_1["default"].bind(SearchModalContent_module_scss_1["default"]);
function SearchModalContent(_a) {
    var item = _a.item, data = _a.data, searchValue = _a.searchValue, setSearchValue = _a.setSearchValue, statusValue = _a.statusValue, setStatusValue = _a.setStatusValue, setSearchResult = _a.setSearchResult, handleChangeFunc = _a.handleChangeFunc, isClick = _a.isClick, setIsClick = _a.setIsClick, isCompanyItemClick = _a.isCompanyItemClick, setIsCompanyItemClick = _a.setIsCompanyItemClick, isStatusClick = _a.isStatusClick, setIsStatusClick = _a.setIsStatusClick, close = _a.close, setSearchId = _a.setSearchId;
    var handleStatus = function () {
        setIsStatusClick(true);
    };
    return (react_1["default"].createElement("div", { className: cx("container") },
        react_1["default"].createElement("div", { className: cx("input_container") },
            react_1["default"].createElement("div", { className: cx("search_input") },
                react_1["default"].createElement(SearchInput_1["default"], { label: "\uD68C\uC0AC\uBA85", placeholder: "\uD68C\uC0AC\uBA85 \uAC80\uC0C9", value: searchValue, handleChangeFunc: handleChangeFunc, setIsClick: setIsClick }),
                isClick && searchValue.length > 0 && (react_1["default"].createElement(CompanySearchResult_1["default"], { data: data, searchValue: searchValue, setSearchValue: setSearchValue, setIsClick: setIsClick, setIsCompanyItemClick: setIsCompanyItemClick }))),
            react_1["default"].createElement(DropdownInput_1["default"], { label: "\uC7AC\uC9C1\uD615\uD0DC", statusValue: statusValue, setStatusValue: setStatusValue, handleStatus: handleStatus })),
        isStatusClick && (react_1["default"].createElement(StatusDropdown_1["default"], { item: item, statusValue: statusValue, setStatusValue: setStatusValue, setIsStatusClick: setIsStatusClick })),
        react_1["default"].createElement(CareerConfirmButton_1["default"]
        // isClick={isClick}
        , { 
            // isClick={isClick}
            setIsClick: setIsClick, isCompanyItemClick: isCompanyItemClick, 
            // setIsCompanyItemClick={setIsCompanyItemClick}
            close: close, searchValue: searchValue, setSearchValue: setSearchValue, statusValue: statusValue, setSearchResult: setSearchResult, setSearchId: setSearchId, item: item })));
}
exports["default"] = SearchModalContent;
