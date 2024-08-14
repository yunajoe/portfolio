"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useTimeout(callbackFunction, time) {
    var savedCallback = react_1.useRef(callbackFunction);
    react_1.useEffect(function () {
        savedCallback.current = callbackFunction;
    }, [callbackFunction]);
    react_1.useEffect(function () {
        var functionId = setTimeout(function () { return savedCallback.current(); }, time);
        return function () { return clearTimeout(functionId); };
    }, []);
    return null;
}
exports["default"] = useTimeout;
