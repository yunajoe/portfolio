"use strict";
exports.__esModule = true;
var useDate_1 = require("@/hooks/useDate");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var bind_1 = require("classnames/bind");
var react_redux_1 = require("react-redux");
var DateBox_module_scss_1 = require("./DateBox.module.scss");
var cx = bind_1["default"].bind(DateBox_module_scss_1["default"]);
function EducationDate(_a) {
    var _b, _c, _d, _e;
    var item = _a.item;
    var dispatch = react_redux_1.useDispatch();
    var handleChangeCurrent = function (event) {
        dispatch(portpolioSlice_1.educationFieldEdit({
            id: item.id,
            schoolDate: item.schoolDate,
            schoolName: item.schoolName,
            major: item.major,
            isCurrent: event.target.checked
        }));
    };
    var _f = useDate_1["default"]("education/date", item), handleStartDate = _f.handleStartDate, handleEndDate = _f.handleEndDate;
    return (React.createElement("div", { className: cx("container") },
        React.createElement("div", { className: cx("date") },
            React.createElement("div", { className: cx("start_date") },
                React.createElement("input", { onChange: function (event) { return handleStartDate(event); }, value: (_b = item.schoolDate) === null || _b === void 0 ? void 0 : _b.startYear, className: cx("input_year"), name: "startYear", maxLength: 4, placeholder: "YYYY", type: "text" }),
                React.createElement("span", null,
                    ".",
                    React.createElement("input", { onChange: function (event) { return handleStartDate(event); }, value: (_c = item.schoolDate) === null || _c === void 0 ? void 0 : _c.startMonth, name: "startMonth", maxLength: 2, placeholder: "MM", type: "text", className: cx("input_month") }))),
            !item.isCurrent ? (React.createElement("div", { className: cx("end_date") },
                React.createElement("span", null, "-"),
                React.createElement("input", { onChange: function (event) { return handleEndDate(event); }, value: (_d = item.schoolDate) === null || _d === void 0 ? void 0 : _d.endYear, name: "endYear", maxLength: 4, placeholder: "YYYY", type: "text", className: cx("input_year") }),
                React.createElement("span", null,
                    ".",
                    React.createElement("input", { onChange: function (event) { return handleEndDate(event); }, value: (_e = item.schoolDate) === null || _e === void 0 ? void 0 : _e.endMonth, name: "endMonth", maxLength: 2, placeholder: "MM", type: "text", className: cx("input_month") })))) : (React.createElement("div", { style: { width: "100px" } }))),
        React.createElement("div", null,
            React.createElement("input", { type: "checkbox", id: "current", name: "current", checked: item.isCurrent, onChange: handleChangeCurrent }),
            React.createElement("label", { htmlFor: "current" }, "\uD604\uC7AC\uC7AC\uD559\uC911"))));
}
exports["default"] = EducationDate;
