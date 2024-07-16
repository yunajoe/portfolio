"use client";
"use strict";
exports.__esModule = true;
var CareerFieldBox_1 = require("@/components/box/myportpolio/CareerFieldBox");
var EducationFieldBox_1 = require("@/components/box/myportpolio/EducationFieldBox");
var InputBox_1 = require("@/components/box/myportpolio/InputBox");
var IntroduceBox_1 = require("@/components/box/myportpolio/IntroduceBox");
var text_1 = require("@/constant/text");
var ToastContext_1 = require("@/context/ToastContext");
var AddIcon_1 = require("@/public/icons/AddIcon");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var preprecessingApiData_1 = require("@/utils/preprecessingApiData");
var core_1 = require("@mantine/core");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
function MyPortPolioEditContents(_a) {
    var majorList = _a.majorList, companyList = _a.companyList;
    var usePortPolioSelector = hooks_1.useAppSelector(portpolioSlice_1.selectPortPolio);
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    var useAuthSelector = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var introText = usePortPolioSelector.introText, careerList = usePortPolioSelector.careerList, educationList = usePortPolioSelector.educationList;
    var defaultPortPolioStatus = useStatusSelector.defaultPortPolioStatus, defaultPortPolioMessage = useStatusSelector.defaultPortPolioMessage;
    var userData = useAuthSelector.userData;
    var filteredMajorArr = preprecessingApiData_1.preprocessingMajor(majorList);
    var filteredCompanyArr = preprecessingApiData_1.preprocessingCompany(companyList);
    var toast = react_1.useContext(ToastContext_1.ToastContext);
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var portpolioId = pathname.split("edit/")[1];
    var defaultResumeBox = (React.createElement(React.Fragment, null, usePortPolioSelector.defaultResume ? (React.createElement(core_1.Box, { w: "100%", ta: "right", p: "15px", bg: "#f8f5ff", mb: "10px" },
        React.createElement(core_1.Text, { c: "#8958fa", ta: "left", fw: 700 }, "\uAE30\uBCF8 \uC774\uB825\uC11C"))) : (React.createElement(core_1.Box, { w: "100%", ta: "right", p: "15px", bg: "#f8f8f8", mb: "10px" },
        React.createElement(core_1.UnstyledButton, { c: "#36f", fw: 700, onClick: function () {
                return handleChangeToDefaultResume(userData._id, portpolioId);
            } }, "\uAE30\uBCF8\uC774\uB825\uC11C\uB85C \uC124\uC815\uD558\uAE30")))));
    var dispatch = hooks_1.useAppDispatch();
    var handleCompleteButton = function () {
        if (introText.length !== 0 &&
            careerList.length !== 0 &&
            educationList.length !== 0) {
            dispatch({
                type: "SAVE_PORT_POLIO_REQUEST",
                portpolioId: portpolioId,
                introText: introText,
                careerList: careerList,
                educationList: educationList
            });
            router.push("/myportpolio");
        }
    };
    var educationListMemo = react_1.useMemo(function () {
        return usePortPolioSelector.educationList;
    }, [usePortPolioSelector.educationList]);
    var careerListMemo = react_1.useMemo(function () {
        return usePortPolioSelector.careerList;
    }, [usePortPolioSelector.careerList]);
    var handleCareerAddButton = function () {
        var _a, _b;
        if (careerListMemo.length === 0) {
            dispatch(portpolioSlice_1.careerFieldAdd({
                companyName: "",
                status: "정규직",
                position: "",
                companyDate: {
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: ""
                }
            }));
        }
        else if (((_a = careerListMemo.at(0)) === null || _a === void 0 ? void 0 : _a.companyName) && ((_b = careerListMemo.at(0)) === null || _b === void 0 ? void 0 : _b.position)) {
            dispatch(portpolioSlice_1.careerFieldAdd({
                companyName: "",
                status: "정규직",
                position: "",
                companyDate: {
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: ""
                }
            }));
        }
    };
    var handleEducationAddButton = function () {
        var _a, _b;
        if (educationListMemo.length === 0) {
            dispatch(portpolioSlice_1.educationFieldAdd({
                schoolName: "",
                major: "",
                schoolDate: {
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: ""
                }
            }));
        }
        else if (((_a = educationListMemo.at(0)) === null || _a === void 0 ? void 0 : _a.schoolName) && ((_b = educationListMemo.at(0)) === null || _b === void 0 ? void 0 : _b.major)) {
            dispatch(portpolioSlice_1.educationFieldAdd({
                schoolName: "",
                major: "",
                schoolDate: {
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: ""
                }
            }));
        }
    };
    react_1.useEffect(function () {
        return function () {
            dispatch(statusSlice_1.defaultPortPolioReset());
        };
    }, []);
    react_1.useEffect(function () {
        dispatch({
            type: "GET_PORT_POLIO_DETAIL_REQUEST",
            portpolioId: portpolioId
        });
    }, [portpolioId, defaultPortPolioStatus]);
    var handleChangeToDefaultResume = function (users_table_id, portpolioId) {
        dispatch({
            type: "UPDATE_DEFAULT_PORT_POLIO_REQUEST",
            users_table_id: users_table_id,
            portpolio_id: portpolioId
        });
    };
    react_1.useEffect(function () {
        if (defaultPortPolioStatus === 200) {
            toast === null || toast === void 0 ? void 0 : toast.open(defaultPortPolioMessage);
        }
    }, [defaultPortPolioStatus]);
    return (React.createElement(React.Fragment, null,
        defaultResumeBox,
        React.createElement(InputBox_1["default"], { title: "\uAC04\uB2E8\uC18C\uAC1C\uAE00", description: text_1.intro }),
        React.createElement(IntroduceBox_1["default"], { introText: introText }),
        React.createElement(InputBox_1["default"], { title: "\uACBD\uB825", description: text_1.career }),
        React.createElement(core_1.Flex, { justify: "flex-start", align: "center", gap: "2px", mb: "10px" },
            React.createElement(AddIcon_1["default"], { style: { width: "15px", height: "20px" } }),
            React.createElement(core_1.Text, { style: { cursor: "pointer" }, onClick: handleCareerAddButton, c: "blue", fw: 700 }, "\uCD94\uAC00")),
        React.createElement("div", { style: { marginBottom: "30px" } }, careerListMemo.length > 0 &&
            careerListMemo.map(function (item, index) {
                return (React.createElement("div", { key: item.id },
                    React.createElement(CareerFieldBox_1["default"], { item: item, portpolioId: portpolioId, index: index, companyList: filteredCompanyArr })));
            })),
        React.createElement(InputBox_1["default"], { title: "\uD559\uB825", description: text_1.school }),
        React.createElement(core_1.Flex, { justify: "flex-start", align: "center", gap: "2px", mb: "10px" },
            React.createElement(AddIcon_1["default"], { style: { width: "15px", height: "20px" } }),
            React.createElement(core_1.Text, { style: { cursor: "pointer" }, onClick: handleEducationAddButton, c: "blue", fw: 700 }, "\uCD94\uAC00")),
        educationListMemo.length > 0 &&
            educationListMemo.map(function (item, index) {
                return (React.createElement("div", { key: item.id },
                    React.createElement(EducationFieldBox_1["default"], { item: item, portpolioId: portpolioId, index: index, majorList: filteredMajorArr })));
            }),
        React.createElement(core_1.Button, { onClick: handleCompleteButton }, "\uC791\uC131 \uC644\uB8CC")));
}
exports["default"] = MyPortPolioEditContents;
