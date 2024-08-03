"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var SideBarMenuItem_module_scss_1 = require("./SideBarMenuItem.module.scss");
var cx = bind_1["default"].bind(SideBarMenuItem_module_scss_1["default"]);
function SideBarMenuItem(_a) {
    var icon = _a.icon, itemName = _a.itemName, handleClick = _a.handleClick;
    return (React.createElement("li", { className: cx("menu_item") },
        React.createElement(core_1.UnstyledButton, { "data-text": itemName, className: cx("icon_container"), onClick: function () {
                handleClick(itemName);
            } },
            React.createElement("div", { className: cx("icon") }, icon),
            React.createElement("span", { className: cx("icon_name") }, itemName))));
}
exports["default"] = SideBarMenuItem;
