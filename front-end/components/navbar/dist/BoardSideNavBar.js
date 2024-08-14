"use strict";
exports.__esModule = true;
var ConditionCusTomAvatar_1 = require("@/components/avatar/ConditionCusTomAvatar");
var BoardSideBar_1 = require("@/components/sidebar/BoardSideBar");
var bind_1 = require("classnames/bind");
var BoardSideNavBar_module_scss_1 = require("./BoardSideNavBar.module.scss");
var cx = bind_1["default"].bind(BoardSideNavBar_module_scss_1["default"]);
function BoardSideNavBar(_a) {
    var userData = _a.userData, mergedRefs = _a.mergedRefs;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: cx("slide_menu_container") },
            React.createElement("div", { className: cx("slide_menu") },
                React.createElement("div", { className: cx("user_info") },
                    React.createElement("div", { className: cx("image_box") },
                        React.createElement(ConditionCusTomAvatar_1["default"], { userData: userData, size: "200px", width: 230, height: 230 }))),
                React.createElement("div", { className: cx("menu_name") },
                    React.createElement(BoardSideBar_1["default"], { mergedRefs: mergedRefs }))))));
}
exports["default"] = BoardSideNavBar;
