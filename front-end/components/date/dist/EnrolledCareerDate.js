"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var EnrolledDate_module_scss_1 = require("./EnrolledDate.module.scss");
var cx = bind_1["default"].bind(EnrolledDate_module_scss_1["default"]);
function EnrolledCareerDate(_a) {
    var item = _a.item;
    return (React.createElement("div", { className: cx("container") },
        React.createElement("div", { className: cx("start") },
            React.createElement("span", null, item.companyDate.startYear),
            React.createElement("span", null, "."),
            React.createElement("span", null, item.companyDate.startMonth)),
        React.createElement("div", null, "-"),
        !item.isCurrent ? (React.createElement("div", { className: cx("end") },
            React.createElement("span", null, item.companyDate.endYear),
            React.createElement("span", null, "."),
            React.createElement("span", null, item.companyDate.endMonth))) : (React.createElement("span", null, "\uD604\uC7AC\uC7AC\uC9C1\uC911"))));
}
exports["default"] = EnrolledCareerDate;
