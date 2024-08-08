"use strict";
exports.__esModule = true;
var AutoTypeWriter_1 = require("@/components/style/AutoTypeWriter");
var bind_1 = require("classnames/bind");
var HomeSection_module_scss_1 = require("./HomeSection.module.scss");
var cx = bind_1["default"].bind(HomeSection_module_scss_1["default"]);
function HomeSection(_a) {
    var userData = _a.userData, homeRef = _a.homeRef;
    return (React.createElement("section", { className: cx("section"), id: "home", ref: homeRef },
        React.createElement("div", { className: cx("home", "overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("section_head") },
                    React.createElement("div", { className: cx("user_info") },
                        React.createElement("h3", { className: cx("greeting_text") }, "HI, IAM"),
                        React.createElement("h1", { className: cx("user_name_text") }, userData.username),
                        React.createElement("h3", { className: cx("description") },
                            React.createElement(AutoTypeWriter_1["default"], { userData: userData }))))))));
}
exports["default"] = HomeSection;
