"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var StatusDropdown_module_css_1 = require("./StatusDropdown.module.css");
var cx = bind_1["default"].bind(StatusDropdown_module_css_1["default"]);
function StatusDropdown(_a) {
    var item = _a.item, statusValue = _a.statusValue, setStatusValue = _a.setStatusValue, setIsStatusClick = _a.setIsStatusClick;
    var _b = react_1.useState(-1), hoveredIndex = _b[0], setHoveredIndex = _b[1];
    var positionData = ["정규직", "계약직", "인턴"];
    var handleOnClick = function (status) {
        setIsStatusClick(false);
        setStatusValue(status);
    };
    var handleMouseOver = react_1.useCallback(function (index) {
        setHoveredIndex(index);
    }, []);
    var items = positionData.map(function (item, index) { return (React.createElement(core_1.UnstyledButton, { className: cx("list_item"), onMouseOver: function () { return handleMouseOver(index); }, onClick: function () { return handleOnClick(item); }, display: "block", "data-list-item": true, key: item, bg: index === hoveredIndex ? "blue" : undefined }, item)); });
    return (React.createElement("div", { className: cx("container") },
        React.createElement(core_1.List, null, items)));
}
exports["default"] = StatusDropdown;
