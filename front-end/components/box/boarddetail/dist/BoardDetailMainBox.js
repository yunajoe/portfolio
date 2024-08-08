"use strict";
exports.__esModule = true;
var AboutMeSection_1 = require("@/components/section/AboutMeSection");
var HomeSection_1 = require("@/components/section/HomeSection");
var PortFolioSection_1 = require("@/components/section/PortFolioSection");
var preprocessing_1 = require("@/utils/preprocessing");
var bind_1 = require("classnames/bind");
var BoardDetailMainBox_module_scss_1 = require("./BoardDetailMainBox.module.scss");
var cx = bind_1["default"].bind(BoardDetailMainBox_module_scss_1["default"]);
function BoardDetailMainBox(_a) {
    var userData = _a.userData, portpolioData = _a.portpolioData, mergedRefs = _a.mergedRefs;
    var _b = preprocessing_1.getTargetRef(mergedRefs), homeRef = _b.homeRef, aboutMeRef = _b.aboutMeRef, portFolioRef = _b.portFolioRef;
    return (React.createElement("main", { className: cx("container") },
        React.createElement(HomeSection_1["default"], { userData: userData, homeRef: homeRef }),
        React.createElement(AboutMeSection_1["default"], { userData: userData, portpolioData: portpolioData, aboutMeRef: aboutMeRef }),
        React.createElement(PortFolioSection_1["default"], { portFolioRef: portFolioRef })));
}
exports["default"] = BoardDetailMainBox;
