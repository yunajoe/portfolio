"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var SectionHead_module_scss_1 = require("./SectionHead.module.scss");
var cx = bind_1["default"].bind(SectionHead_module_scss_1["default"]);
function SectionHead(_a) {
    var targetIcon = _a.targetIcon;
    return (React.createElement("div", { className: cx("section_head") },
        targetIcon,
        React.createElement("h1", { className: cx("title") }, "ABOUT ME")));
}
exports["default"] = SectionHead;
