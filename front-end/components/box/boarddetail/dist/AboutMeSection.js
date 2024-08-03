"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var BoardDetailMainBox_module_scss_1 = require("./BoardDetailMainBox.module.scss");
var cx = bind_1["default"].bind(BoardDetailMainBox_module_scss_1["default"]);
function AboutMeSection() {
    return (React.createElement("section", { className: cx("section"), id: "aboutMe" },
        React.createElement("div", { className: cx("aboutMe", "overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("intro_section", "display_table", "user_container") },
                    React.createElement("div", { className: cx("display_table_cell") },
                        React.createElement("h3", null, "HI, IAM"),
                        React.createElement("h1", null, "YUNA"),
                        React.createElement("h3", { className: cx("description") },
                            React.createElement("span", null, "WEB DEVELOPER"),
                            React.createElement("span", null, "Typed_cursor"))))))));
}
exports["default"] = AboutMeSection;
