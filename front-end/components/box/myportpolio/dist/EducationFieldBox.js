"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var search_1 = require("@/api/search");
var EducationDate_1 = require("@/components/date/EducationDate");
var ModalInput_1 = require("@/components/input/ModalInput");
var SearchEducationModalContent_1 = require("@/components/modal/content/SearchEducationModalContent");
var ModalPortal_1 = require("@/components/modal/ModalPortal");
var SearchModal_1 = require("@/components/modal/type/SearchModal");
var MajorSearchResult_1 = require("@/components/search/MajorSearchResult");
var useModal_1 = require("@/hooks/useModal");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var preprecessingApiData_1 = require("@/utils/preprecessingApiData");
var core_1 = require("@mantine/core");
var icons_react_1 = require("@tabler/icons-react");
var EducationFieldDeleteModal_1 = require("@/components/modal/type/EducationFieldDeleteModal");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var FieldBox_module_scss_1 = require("./FieldBox.module.scss");
var cx = bind_1["default"].bind(FieldBox_module_scss_1["default"]);
function EducationFieldBox(_a) {
    var _this = this;
    var item = _a.item, portpolioId = _a.portpolioId, index = _a.index, majorList = _a.majorList;
    var _b = react_1.useState(""), searchValue = _b[0], setSearchValue = _b[1];
    var _c = react_1.useState([]), searchResult = _c[0], setSearchResult = _c[1];
    // 전공
    var _d = react_1.useState(""), searchMajorValue = _d[0], setSearchMajorValue = _d[1];
    var _e = react_1.useState(false), isClick = _e[0], setIsClick = _e[1];
    var _f = react_1.useState(false), isSchoolItemClick = _f[0], setIsSchoolItemClick = _f[1];
    var _g = react_1.useState(false), isMajorMenuClick = _g[0], setIsMajorMenuClick = _g[1];
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
        callback: function (value) { return __awaiter(_this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, search_1.searchSchoolByName(value)];
                    case 1:
                        result = _a.sent();
                        data = preprecessingApiData_1.removeDuplicatedSchool(result.data);
                        setSearchResult(data);
                        return [3 /*break*/, 3];
                    case 2:
                        setSearchResult([]);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        delay: 500
    }), []);
    var handleInputChange = function (event) {
        printValue(event.target.value);
        setSearchValue(event.target.value);
    };
    var content = (React.createElement(React.Fragment, null,
        React.createElement(SearchEducationModalContent_1["default"], { data: searchResult, item: item, searchValue: searchValue, setSearchValue: setSearchValue, setSearchResult: setSearchResult, handleChangeFunc: handleInputChange, isClick: isClick, setIsClick: setIsClick, isSchoolItemClick: isSchoolItemClick, setIsSchoolItemClick: setIsSchoolItemClick, close: handleClose })));
    var handleMajorChange = function (event) {
        setIsMajorMenuClick(true);
        setSearchMajorValue(event.target.value);
        dispatch(portpolioSlice_1.educationFieldEdit({
            id: item.id,
            schoolDate: item.schoolDate,
            schoolName: item.schoolName,
            major: event.target.value
        }));
    };
    var searchMajorListMemo = react_1.useMemo(function () {
        if (item.major.length > 0) {
            var result = majorList.filter(function (data) { return data.includes(item.major); });
            return result;
        }
        return [];
    }, [item.major, majorList]);
    return (React.createElement("div", null,
        React.createElement(core_1.Flex, { className: cx("container") },
            React.createElement(core_1.Stack, null,
                React.createElement(EducationDate_1["default"], { item: item })),
            React.createElement(core_1.Box, { w: "100%" },
                React.createElement(core_1.Flex, { w: "100%", justify: "space-between", align: "center" },
                    React.createElement(ModalInput_1["default"], { placeholder: "\uD559\uAD50\uBA85", value: item.schoolName, onClick: handleSearchModal }),
                    React.createElement(icons_react_1.IconX, { stroke: 1, style: { cursor: "pointer", padding: "1px" }, onClick: handleDeleteModalOpen })),
                React.createElement("div", { className: cx("major_input_container") },
                    React.createElement(core_1.TextInput, { variant: "unstyled", placeholder: "\uC804\uACF5 \uBC0F \uD559\uC704(ex: \uACBD\uC81C\uD559\uACFC \uD559\uC0AC)", value: item.major, onClick: function () { return setIsMajorMenuClick(true); }, onChange: function (event) { return handleMajorChange(event); } }),
                    isMajorMenuClick && searchMajorValue.length > 0 && (React.createElement(MajorSearchResult_1["default"], { data: searchMajorListMemo, item: item, searchMajorValue: searchMajorValue, setSearchMajorValue: setSearchMajorValue, setIsMajorMenuClick: setIsMajorMenuClick }))))),
        isOpen && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(SearchModal_1["default"], { title: "\uD559\uAD50\uAC80\uC0C9", content: content, close: handleClose, reset: handleResetModal, setIsClick: setIsClick, setIsItemClick: setIsSchoolItemClick }))),
        isDeleteModalOpen && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(EducationFieldDeleteModal_1["default"], { onClose: handleDeleteModalClose, index: index })))));
}
exports["default"] = EducationFieldBox;
