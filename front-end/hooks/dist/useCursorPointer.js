"use strict";
exports.__esModule = true;
var react_1 = require("react");
// https://blog.naver.com/ndb796/221406934376
function useCursorPointer(ref, isResumeNameEdit) {
    react_1.useEffect(function () {
        var listener = function () {
            if (ref.current && isResumeNameEdit) {
                ref.current.focus();
            }
        };
    }, [ref.current]);
    return isResumeNameEdit;
}
exports["default"] = useCursorPointer;
