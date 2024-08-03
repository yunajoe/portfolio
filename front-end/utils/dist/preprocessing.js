"use strict";
exports.__esModule = true;
exports.getTargetRef = exports.getPortPolioId = void 0;
exports.getPortPolioId = function (path, criteria) {
    var portpolioId = path.split(criteria + "/")[1];
    return portpolioId;
};
exports.getTargetRef = function (targetRefArr) {
    var homeRef = targetRefArr[0].homeRef;
    var aboutMeRef = targetRefArr[1].aboutMeRef;
    var portFolioRef = targetRefArr[2].portFolioRef;
    return {
        homeRef: homeRef,
        aboutMeRef: aboutMeRef,
        portFolioRef: portFolioRef
    };
};
