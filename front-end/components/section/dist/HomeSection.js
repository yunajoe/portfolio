"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var HomeSection_module_scss_1 = require("./HomeSection.module.scss");
var cx = bind_1["default"].bind(HomeSection_module_scss_1["default"]);
function HomeSection(_a) {
    var homeRef = _a.homeRef;
    return (React.createElement("section", { className: cx("section"), id: "home", ref: homeRef },
        React.createElement("div", { className: cx("home", "overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("intro_section", "display_table", "user_container") },
                    React.createElement("div", { className: cx("display_table_cell") },
                        React.createElement("h3", null, "HI, IAM"),
                        React.createElement("h1", null, "YUNA"),
                        React.createElement("h3", { className: cx("description") },
                            React.createElement("span", null, "WEB DEVELOPER"),
                            React.createElement("span", null, "Typed_cursor"))))))));
}
exports["default"] = HomeSection;
