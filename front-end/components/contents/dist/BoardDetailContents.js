"use client";
"use strict";
exports.__esModule = true;
var BoardDetailMainBox_1 = require("@/components/box/boarddetail/BoardDetailMainBox");
var FloatingButton_1 = require("@/components/button/FloatingButton");
var BoardSideNavBar_1 = require("@/components/navbar/BoardSideNavBar");
var react_1 = require("react");
function BoardDetailContents(_a) {
    var userData = _a.userData, portpolioData = _a.portpolioData;
    var homeRef = react_1.useRef(null);
    var aboutMeRef = react_1.useRef(null);
    var portFolioRef = react_1.useRef(null);
    var resumeRef = react_1.useRef(null);
    var contactRef = react_1.useRef(null);
    return (React.createElement("div", null,
        React.createElement(BoardSideNavBar_1["default"], { userData: userData, mergedRefs: [
                { homeRef: homeRef },
                { aboutMeRef: aboutMeRef },
                { portFolioRef: portFolioRef },
                { resumeRef: resumeRef },
                { contactRef: contactRef },
            ] }),
        React.createElement(BoardDetailMainBox_1["default"], { userData: userData, portpolioData: portpolioData, mergedRefs: [
                { homeRef: homeRef },
                { aboutMeRef: aboutMeRef },
                { portFolioRef: portFolioRef },
                { resumeRef: resumeRef },
                { contactRef: contactRef },
            ] }),
        React.createElement(FloatingButton_1["default"], { text: "\uD398\uC774\uC9C0 \uB3CC\uC544\uAC00\uAE30" })));
}
exports["default"] = BoardDetailContents;
