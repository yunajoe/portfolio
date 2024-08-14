"use strict";
exports.__esModule = true;
var SectionHead_1 = require("@/components/section/SectionHead");
var WorkIcon_1 = require("@/public/icons/WorkIcon");
var bind_1 = require("classnames/bind");
var PortFolioSection_module_scss_1 = require("./PortFolioSection.module.scss");
var cx = bind_1["default"].bind(PortFolioSection_module_scss_1["default"]);
function PortFolioSection(_a) {
    var portFolioRef = _a.portFolioRef;
    return (React.createElement("section", { className: cx("section"), id: "PortPolio", ref: portFolioRef },
        React.createElement("div", { className: cx("overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("contents") },
                    React.createElement(SectionHead_1["default"], { targetIcon: React.createElement(WorkIcon_1["default"], { style: { width: "300px", height: "300px" } }), title: "MY WORK" }))))));
}
exports["default"] = PortFolioSection;
