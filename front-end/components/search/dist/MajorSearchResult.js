"use strict";
exports.__esModule = true;
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var MajorSearch_module_scss_1 = require("./MajorSearch.module.scss");
var cx = bind_1["default"].bind(MajorSearch_module_scss_1["default"]);
function MajorSearchResult(_a) {
    var data = _a.data, item = _a.item, searchMajorValue = _a.searchMajorValue, setSearchMajorValue = _a.setSearchMajorValue, setIsMajorMenuClick = _a.setIsMajorMenuClick;
    var _b = react_1.useState(-1), hoveredIndex = _b[0], setHoveredIndex = _b[1];
    var handleMouseOver = react_1.useCallback(function (index) {
        setHoveredIndex(index);
    }, []);
    var dispatch = hooks_1.useAppDispatch();
    var items = data.map(function (major, index) { return (react_1["default"].createElement(core_1.UnstyledButton, { className: cx("list_item"), display: "block", "data-list-item": true, key: major, bg: index === hoveredIndex ? "blue" : undefined, onMouseOver: function () { return handleMouseOver(index); }, onClick: function () {
            setSearchMajorValue(major);
            setIsMajorMenuClick(false);
            dispatch(portpolioSlice_1.educationFieldEdit({
                id: item.id,
                schoolDate: item.schoolDate,
                schoolName: item.schoolName,
                major: major,
                isCurrent: item.isCurrent
            }));
        } }, major)); });
    return (react_1["default"].createElement(core_1.ScrollArea, { className: cx("container") },
        react_1["default"].createElement(core_1.List, null,
            searchMajorValue.length > 0 && (react_1["default"].createElement(core_1.UnstyledButton, { display: "block", "data-list-item": true, className: cx("list_item"), onClick: function () {
                    setSearchMajorValue(searchMajorValue);
                    setIsMajorMenuClick(false);
                } },
                "\uC9C1\uC811 \uC785\uB825 `",
                searchMajorValue,
                "` \uC0AC\uC6A9\uD558\uAE30")),
            data.length > 0 && items)));
}
exports["default"] = MajorSearchResult;
