"use client";
"use strict";
exports.__esModule = true;
var BoardDetailMainBox_1 = require("@/components/box/boarddetail/BoardDetailMainBox");
var BoardSideNavBar_1 = require("@/components/navbar/BoardSideNavBar");
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var BoardDetailContents_module_scss_1 = require("./BoardDetailContents.module.scss");
var cx = bind_1["default"].bind(BoardDetailContents_module_scss_1["default"]);
function BoardDetailContents(_a) {
    var userData = _a.userData, portpolioData = _a.portpolioData;
    var homeRef = react_1.useRef(null);
    var aboutMeRef = react_1.useRef(null);
    var portFolioRef = react_1.useRef(null);
    return (React.createElement("div", null,
        React.createElement(BoardSideNavBar_1["default"], { userData: userData, mergedRefs: [{ homeRef: homeRef }, { aboutMeRef: aboutMeRef }, { portFolioRef: portFolioRef }] }),
        React.createElement(BoardDetailMainBox_1["default"], { mergedRefs: [{ homeRef: homeRef }, { aboutMeRef: aboutMeRef }, { portFolioRef: portFolioRef }] })));
}
exports["default"] = BoardDetailContents;
