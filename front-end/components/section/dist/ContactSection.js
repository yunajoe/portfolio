"use strict";
exports.__esModule = true;
var SectionHead_1 = require("@/components/section/SectionHead");
var ContactIcon_1 = require("@/public/icons/ContactIcon");
var bind_1 = require("classnames/bind");
var ContactSection_module_scss_1 = require("./ContactSection.module.scss");
var cx = bind_1["default"].bind(ContactSection_module_scss_1["default"]);
function ContactSection(_a) {
    var contactRef = _a.contactRef;
    return (React.createElement("section", { className: cx("section"), id: "home", ref: contactRef },
        React.createElement("div", { className: cx("overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("contents") },
                    React.createElement(SectionHead_1["default"], { targetIcon: React.createElement(ContactIcon_1["default"], { style: { width: "500px", height: "300px" } }), title: "CONTACT ME" }))))));
}
exports["default"] = ContactSection;
