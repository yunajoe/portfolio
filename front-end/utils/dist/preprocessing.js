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
    var resumeRef = targetRefArr[3].resumeRef;
    var contactRef = targetRefArr[4].contactRef;
    return {
        homeRef: homeRef,
        aboutMeRef: aboutMeRef,
        portFolioRef: portFolioRef,
        resumeRef: resumeRef,
        contactRef: contactRef
    };
};
