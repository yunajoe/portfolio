"use strict";
exports.__esModule = true;
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
function useFieldAdd() {
    var dispatch = hooks_1.useAppDispatch();
    return {
        careerAddFunction: function () {
            dispatch(portpolioSlice_1.careerFieldAdd({
                companyName: "",
                status: "정규직",
                position: "",
                companyDate: {
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: ""
                },
                isCurrent: false
            }));
        },
        educationAddFunction: function () {
            dispatch(portpolioSlice_1.educationFieldAdd({
                schoolName: "",
                major: "",
                schoolDate: {
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: ""
                },
                isCurrent: false
            }));
        }
    };
}
exports["default"] = useFieldAdd;
