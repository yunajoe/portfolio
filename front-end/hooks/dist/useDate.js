"use strict";
exports.__esModule = true;
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var react_redux_1 = require("react-redux");
function useDate(dispatchname, item) {
    var dispatch = react_redux_1.useDispatch();
    var handleStartDate = function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (dispatchname === "career/date") {
            var _o = e.target, name = _o.name, value = _o.value;
            var nonNumberValue = value.replace(/[^0-9]/g, "");
            switch (name) {
                case "startYear":
                    dispatch(portpolioSlice_1.careerFieldEdit({
                        id: item.id,
                        companyName: item.companyName,
                        status: item.status,
                        position: item.position,
                        companyDate: {
                            startYear: nonNumberValue,
                            startMonth: (_a = item.companyDate) === null || _a === void 0 ? void 0 : _a.startMonth,
                            endYear: (_b = item.companyDate) === null || _b === void 0 ? void 0 : _b.endYear,
                            endMonth: (_c = item.companyDate) === null || _c === void 0 ? void 0 : _c.endMonth
                        },
                        isCurrent: item.isCurrent
                    }));
                    break;
                case "startMonth":
                    dispatch(portpolioSlice_1.careerFieldEdit({
                        id: item.id,
                        companyName: item.companyName,
                        status: item.status,
                        position: item.position,
                        companyDate: {
                            startYear: (_d = item.companyDate) === null || _d === void 0 ? void 0 : _d.startYear,
                            startMonth: nonNumberValue,
                            endYear: (_e = item.companyDate) === null || _e === void 0 ? void 0 : _e.endYear,
                            endMonth: (_f = item.companyDate) === null || _f === void 0 ? void 0 : _f.endMonth
                        },
                        isCurrent: item.isCurrent
                    }));
                    break;
            }
        }
        else if (dispatchname === "education/date") {
            var _p = e.target, name = _p.name, value = _p.value;
            var nonNumberValue = value.replace(/[^0-9]/g, "");
            switch (name) {
                case "startYear":
                    dispatch(portpolioSlice_1.educationFieldEdit({
                        id: item.id,
                        schoolName: item.schoolName,
                        major: item.major,
                        schoolDate: {
                            startYear: nonNumberValue,
                            startMonth: (_g = item.schoolDate) === null || _g === void 0 ? void 0 : _g.startMonth,
                            endYear: (_h = item.schoolDate) === null || _h === void 0 ? void 0 : _h.endYear,
                            endMonth: (_j = item.schoolDate) === null || _j === void 0 ? void 0 : _j.endMonth
                        },
                        isCurrent: item.isCurrent
                    }));
                    break;
                case "startMonth":
                    dispatch(portpolioSlice_1.educationFieldEdit({
                        id: item.id,
                        schoolName: item.schoolName,
                        major: item.major,
                        schoolDate: {
                            startYear: (_k = item.schoolDate) === null || _k === void 0 ? void 0 : _k.startYear,
                            startMonth: nonNumberValue,
                            endYear: (_l = item.schoolDate) === null || _l === void 0 ? void 0 : _l.endYear,
                            endMonth: (_m = item.schoolDate) === null || _m === void 0 ? void 0 : _m.endMonth
                        },
                        isCurrent: item.isCurrent
                    }));
            }
        }
    };
    var handleEndDate = function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (dispatchname === "career/date") {
            var _o = e.target, name = _o.name, value = _o.value;
            var nonNumberValue = value.replace(/[^0-9]/g, "");
            switch (name) {
                case "endYear":
                    dispatch(portpolioSlice_1.careerFieldEdit({
                        id: item.id,
                        companyName: item.companyName,
                        status: item.status,
                        position: item.position,
                        companyDate: {
                            startYear: (_a = item.companyDate) === null || _a === void 0 ? void 0 : _a.startYear,
                            startMonth: (_b = item.companyDate) === null || _b === void 0 ? void 0 : _b.startMonth,
                            endYear: nonNumberValue,
                            endMonth: (_c = item.companyDate) === null || _c === void 0 ? void 0 : _c.endMonth
                        },
                        isCurrent: item.isCurrent
                    }));
                    break;
                case "endMonth":
                    dispatch(portpolioSlice_1.careerFieldEdit({
                        id: item.id,
                        companyName: item.companyName,
                        status: item.status,
                        position: item.position,
                        companyDate: {
                            startYear: (_d = item.companyDate) === null || _d === void 0 ? void 0 : _d.startYear,
                            startMonth: (_e = item.companyDate) === null || _e === void 0 ? void 0 : _e.startMonth,
                            endYear: (_f = item.companyDate) === null || _f === void 0 ? void 0 : _f.endYear,
                            endMonth: nonNumberValue
                        },
                        isCurrent: item.isCurrent
                    }));
            }
        }
        else if (dispatchname === "education/date") {
            var _p = e.target, name = _p.name, value = _p.value;
            var nonNumberValue = value.replace(/[^0-9]/g, "");
            switch (name) {
                case "endYear":
                    dispatch(portpolioSlice_1.educationFieldEdit({
                        id: item.id,
                        schoolName: item.schoolName,
                        major: item.major,
                        schoolDate: {
                            startYear: (_g = item.schoolDate) === null || _g === void 0 ? void 0 : _g.startYear,
                            startMonth: (_h = item.schoolDate) === null || _h === void 0 ? void 0 : _h.startMonth,
                            endYear: nonNumberValue,
                            endMonth: (_j = item.schoolDate) === null || _j === void 0 ? void 0 : _j.endMonth
                        },
                        isCurrent: item.isCurrent
                    }));
                    break;
                case "endMonth":
                    dispatch(portpolioSlice_1.educationFieldEdit({
                        id: item.id,
                        schoolName: item.schoolName,
                        major: item.major,
                        schoolDate: {
                            startYear: (_k = item.schoolDate) === null || _k === void 0 ? void 0 : _k.startYear,
                            startMonth: (_l = item.schoolDate) === null || _l === void 0 ? void 0 : _l.startMonth,
                            endYear: (_m = item.schoolDate) === null || _m === void 0 ? void 0 : _m.endYear,
                            endMonth: nonNumberValue
                        },
                        isCurrent: item.isCurrent
                    }));
            }
        }
    };
    return {
        handleStartDate: handleStartDate,
        handleEndDate: handleEndDate
    };
}
exports["default"] = useDate;
