"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function PersonIcon(_a) {
    var style = _a.style;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", style: __assign({}, style) },
        React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }),
        React.createElement("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" })));
}
exports["default"] = PersonIcon;
