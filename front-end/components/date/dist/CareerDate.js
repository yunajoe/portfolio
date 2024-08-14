"use strict";
exports.__esModule = true;
var useDate_1 = require("@/hooks/useDate");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var bind_1 = require("classnames/bind");
var react_redux_1 = require("react-redux");
var DateBox_module_scss_1 = require("./DateBox.module.scss");
var cx = bind_1["default"].bind(DateBox_module_scss_1["default"]);
function CareerDate(_a) {
    var _b, _c, _d, _e;
    var item = _a.item;
    var dispatch = react_redux_1.useDispatch();
    console.log("Carreeritem", item);
    var handleChangeCurrent = function (event) {
        var _a, _b, _c, _d;
        dispatch(portpolioSlice_1.careerFieldEdit({
            id: item.id,
            companyName: item.companyName,
            status: item.status,
            position: item.position,
            companyDate: {
                startYear: (_a = item.companyDate) === null || _a === void 0 ? void 0 : _a.startYear,
                startMonth: (_b = item.companyDate) === null || _b === void 0 ? void 0 : _b.startMonth,
                endYear: (_c = item.companyDate) === null || _c === void 0 ? void 0 : _c.endYear,
                endMonth: (_d = item.companyDate) === null || _d === void 0 ? void 0 : _d.endMonth
            },
            isCurrent: event.target.checked
        }));
    };
    var _f = useDate_1["default"]("career/date", item), handleStartDate = _f.handleStartDate, handleEndDate = _f.handleEndDate;
    return (React.createElement("div", { className: cx("container") },
        React.createElement("div", { className: cx("date") },
            React.createElement("div", { className: cx("start_date") },
                React.createElement("input", { onChange: function (event) { return handleStartDate(event); }, value: ((_b = item.companyDate) === null || _b === void 0 ? void 0 : _b.startYear) || "", className: cx("input_year"), name: "startYear", maxLength: 4, placeholder: "YYYY", type: "text" }),
                React.createElement("span", null,
                    ".",
                    React.createElement("input", { onChange: function (event) { return handleStartDate(event); }, value: ((_c = item.companyDate) === null || _c === void 0 ? void 0 : _c.startMonth) || "", name: "startMonth", maxLength: 2, placeholder: "MM", type: "text", className: cx("input_month") }))),
            !item.isCurrent ? (React.createElement("div", { className: cx("end_date") },
                React.createElement("span", null, "-"),
                React.createElement("input", { onChange: function (event) { return handleEndDate(event); }, value: ((_d = item.companyDate) === null || _d === void 0 ? void 0 : _d.endYear) || "", name: "endYear", maxLength: 4, placeholder: "YYYY", type: "text", className: cx("input_year") }),
                React.createElement("span", null,
                    ".",
                    React.createElement("input", { onChange: function (event) { return handleEndDate(event); }, value: ((_e = item.companyDate) === null || _e === void 0 ? void 0 : _e.endMonth) || "", name: "endMonth", maxLength: 2, placeholder: "MM", type: "text", className: cx("input_month") })))) : (React.createElement("div", { style: { width: "100px" } }))),
        React.createElement("div", null,
            React.createElement("input", { type: "checkbox", id: "current", name: "current", checked: item.isCurrent, onChange: handleChangeCurrent }),
            React.createElement("label", { htmlFor: "current" }, "\uD604\uC7AC\uC7AC\uC9C1\uC911"))));
}
exports["default"] = CareerDate;
