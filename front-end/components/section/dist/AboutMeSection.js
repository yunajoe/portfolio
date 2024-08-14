"use strict";
exports.__esModule = true;
var ConditionCusTomAvatar_1 = require("@/components/avatar/ConditionCusTomAvatar");
var SectionHead_1 = require("@/components/section/SectionHead");
var PersonIcon_1 = require("@/public/icons/PersonIcon");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var AboutMeSection_module_scss_1 = require("./AboutMeSection.module.scss");
var cx = bind_1["default"].bind(AboutMeSection_module_scss_1["default"]);
function AboutMeSection(_a) {
    var userData = _a.userData, portpolioData = _a.portpolioData, aboutMeRef = _a.aboutMeRef;
    return (React.createElement("section", { className: cx("section"), id: "aboutMe", ref: aboutMeRef },
        React.createElement("div", { className: cx("overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("contents") },
                    React.createElement(core_1.ScrollArea, { h: 1000 },
                        React.createElement("div", { className: cx("scroll_area") },
                            React.createElement(SectionHead_1["default"], { targetIcon: React.createElement(PersonIcon_1["default"], null), title: "ABOUT ME" }),
                            React.createElement("div", { className: cx("about_me_info") },
                                React.createElement("div", { className: cx("intro_content") },
                                    React.createElement("div", { className: cx("image_box") },
                                        React.createElement(ConditionCusTomAvatar_1["default"], { userData: userData, width: 300, height: 300 })),
                                    React.createElement("div", { className: cx("intro_text") },
                                        React.createElement("p", null, "Hello"),
                                        React.createElement("p", null, portpolioData.introText)))))))))));
}
exports["default"] = AboutMeSection;
