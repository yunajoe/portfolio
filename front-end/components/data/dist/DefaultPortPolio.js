"use client";
"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var DefaultPortPolio_module_scss_1 = require("./DefaultPortPolio.module.scss");
var cx = bind_1["default"].bind(DefaultPortPolio_module_scss_1["default"]);
function DefaultPortPolio(_a) {
    var data = _a.data;
    return (React.createElement("div", { className: cx("container") }, data.map(function (item) {
        return (React.createElement("div", { className: cx("item"), key: item._id }, item.portpolio_name));
    })));
}
exports["default"] = DefaultPortPolio;
