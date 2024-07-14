"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var CareerDate_1 = require("@/components/date/CareerDate");
var ModalInput_1 = require("@/components/input/ModalInput");
var SearchModalContent_1 = require("@/components/modal/content/SearchModalContent");
var ModalPortal_1 = require("@/components/modal/ModalPortal");
var SearchModal_1 = require("@/components/modal/type/SearchModal");
var useModal_1 = require("@/hooks/useModal");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var icons_react_1 = require("@tabler/icons-react");
var CareerFieldDeleteModal_1 = require("@/components/modal/type/CareerFieldDeleteModal");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var FieldBox_module_css_1 = require("./FieldBox.module.css");
var cx = bind_1["default"].bind(FieldBox_module_css_1["default"]);
function CareerFieldBox(_a) {
    var item = _a.item, index = _a.index, companyList = _a.companyList;
    // 회사
    var _b = react_1.useState(""), searchValue = _b[0], setSearchValue = _b[1];
    var _c = react_1.useState([]), searchResult = _c[0], setSearchResult = _c[1];
    var _d = react_1.useState(false), isClick = _d[0], setIsClick = _d[1];
    var _e = react_1.useState(false), isCompanyItemClick = _e[0], setIsCompanyItemClick = _e[1];
    // stasuts
    var _f = react_1.useState("정규직"), statusValue = _f[0], setStatusValue = _f[1];
    var _g = react_1.useState(false), isStatusClick = _g[0], setIsStatusClick = _g[1];
    // 모달
    var _h = useModal_1["default"](), isOpen = _h.isOpen, handleOpen = _h.handleOpen, handleClose = _h.handleClose, isDeleteModalOpen = _h.isDeleteModalOpen, handleDeleteModalOpen = _h.handleDeleteModalOpen, handleDeleteModalClose = _h.handleDeleteModalClose;
    var dispatch = hooks_1.useAppDispatch();
    var handleSearchModal = function () {
        handleOpen();
    };
    var handleResetModal = function () {
        setSearchValue("");
        setSearchResult([]);
    };
    var debounceFunction = function (_a) {
        var callback = _a.callback, delay = _a.delay;
        var timer;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timer);
            timer = setTimeout(function () {
                callback.apply(void 0, args);
            }, delay);
        };
    };
    var printValue = react_1.useCallback(debounceFunction({
        callback: function (value) {
            if (value.length > 0) {
                var result = companyList.filter(function (company) {
                    return company.includes(value);
                });
                setSearchResult(__spreadArrays(result));
            }
            else {
                setSearchResult([]);
            }
        },
        delay: 500
    }), [searchValue]);
    var handleInputChange = function (event) {
        printValue(event.target.value);
        setSearchValue(event.target.value);
    };
    var handlePositionValueChange = function (event) {
        dispatch(portpolioSlice_1.careerFieldEdit({
            id: item.id,
            companyName: item.companyName,
            status: item.status,
            position: event.target.value,
            companyDate: item.companyDate
        }));
    };
    var content = (React.createElement("div", null,
        React.createElement(SearchModalContent_1["default"], { data: searchResult, searchValue: searchValue, setSearchValue: setSearchValue, item: item, statusValue: statusValue, setStatusValue: setStatusValue, setSearchResult: setSearchResult, isClick: isClick, setIsClick: setIsClick, isCompanyItemClick: isCompanyItemClick, setIsCompanyItemClick: setIsCompanyItemClick, isStatusClick: isStatusClick, setIsStatusClick: setIsStatusClick, handleChangeFunc: handleInputChange, close: handleClose })));
    return (React.createElement(React.Fragment, null,
        React.createElement(core_1.Flex, { className: cx("container") },
            React.createElement(core_1.Stack, null,
                React.createElement(CareerDate_1["default"], { item: item })),
            React.createElement(core_1.Box, { w: "100%" },
                React.createElement(core_1.Flex, { w: "100%", justify: "space-between", align: "center" },
                    React.createElement(core_1.Flex, { align: "center" },
                        React.createElement(ModalInput_1["default"], { placeholder: "\uD68C\uC0AC\uBA85", value: item.companyName, onClick: handleSearchModal }),
                        item.companyName.length > 0 && item.status.length > 0 && (React.createElement(core_1.Pill, { size: "sm" }, item.status))),
                    React.createElement(icons_react_1.IconX, { stroke: 1, style: {
                            cursor: "pointer",
                            padding: "1px"
                        }, onClick: handleDeleteModalOpen })),
                React.createElement(core_1.TextInput, { variant: "unstyled", placeholder: "\uBD80\uC11C\uBA85/\uC9C1\uCC45", value: item.position, onChange: handlePositionValueChange }))),
        isOpen && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(SearchModal_1["default"], { title: "\uC9C1\uC7A5\uAC80\uC0C9", content: content, close: handleClose, reset: handleResetModal, setIsClick: setIsClick, setIsItemClick: setIsCompanyItemClick }))),
        isDeleteModalOpen && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(CareerFieldDeleteModal_1["default"], { onClose: handleDeleteModalClose, index: index })))));
}
exports["default"] = CareerFieldBox;
