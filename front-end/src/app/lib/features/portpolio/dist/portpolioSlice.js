"use client";
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
var _a;
exports.__esModule = true;
exports.selectPortPolio = exports.portpolioReset = exports.portpolioDetailFail = exports.portpolioDetailSuccess = exports.educationFieldDelete = exports.educationFieldEdit = exports.educationFieldAdd = exports.careerFieldDelete = exports.careerFieldEdit = exports.careerFieldAdd = exports.introTextEdit = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    userTableId: "",
    portpolioId: "",
    portpolioName: "",
    introText: "",
    careerList: [],
    educationList: [],
    educationIdNumber: 0,
    careerIdNumber: 0,
    createdAt: "",
    updatedAt: "",
    defaultResume: false
};
var portPolioSlice = toolkit_1.createSlice({
    name: "portpolio",
    initialState: initialState,
    reducers: {
        introTextEdit: function (state, action) {
            state.introText = action.payload;
        },
        careerFieldAdd: function (state, action) {
            state.careerIdNumber++;
            var object = {
                id: state.careerIdNumber,
                companyName: action.payload.companyName,
                status: action.payload.status,
                position: action.payload.position,
                companyDate: action.payload.companyDate,
                isCurrent: action.payload.isCurrent
            };
            state.careerList.unshift(object);
        },
        careerFieldEdit: function (state, action) {
            var ItemIndex = state.careerList.findIndex(function (item) { return item.id === action.payload.id; });
            if (ItemIndex !== -1) {
                state.careerList[ItemIndex].companyName = action.payload.companyName;
                state.careerList[ItemIndex].status = action.payload.status;
                state.careerList[ItemIndex].position = action.payload.position;
                state.careerList[ItemIndex].companyDate = action.payload.companyDate;
                state.careerList[ItemIndex].isCurrent = action.payload.isCurrent;
            }
        },
        careerFieldDelete: function (state, action) {
            var arr = state.careerList.filter(function (_, index) { return index !== action.payload.index; });
            state.careerList = arr;
        },
        educationFieldAdd: function (state, action) {
            state.educationIdNumber++;
            var object = {
                id: state.educationIdNumber,
                schoolName: action.payload.schoolName,
                major: action.payload.major,
                schoolDate: action.payload.schoolDate,
                isCurrent: action.payload.isCurrent
            };
            state.educationList.unshift(object);
        },
        educationFieldEdit: function (state, action) {
            var ItemIndex = state.educationList.findIndex(function (item) { return item.id === action.payload.id; });
            if (ItemIndex !== -1) {
                state.educationList[ItemIndex].schoolName = action.payload.schoolName;
                state.educationList[ItemIndex].major = action.payload.major;
                state.educationList[ItemIndex].schoolDate = action.payload.schoolDate;
                state.educationList[ItemIndex].isCurrent = action.payload.isCurrent;
            }
        },
        educationFieldDelete: function (state, action) {
            var arr = state.educationList.filter(function (_, index) { return index !== action.payload.index; });
            state.educationList = arr;
        },
        portpolioDetailSuccess: function (state, action) {
            var _a = action.payload, _id = _a._id, users_table_id = _a.users_table_id, portpolioId = _a.portpolioId, portpolio_name = _a.portpolio_name, introText = _a.introText, careerList = _a.careerList, educationList = _a.educationList;
            // user_table_id
            state.userTableId = users_table_id;
            //portpolioId
            state.portpolioId = portpolioId;
            // portpolioname
            state.portpolioName = portpolio_name;
            // introText
            state.introText = introText;
            // careerList
            if (careerList.length === 0) {
                state.careerList = [];
                state.careerIdNumber = 0;
            }
            else {
                var lastElement = careerList[careerList.length - 1];
                state.careerIdNumber = lastElement.id;
                state.careerList = careerList;
            }
            // educatoinalList
            if (educationList.length === 0) {
                state.educationList = [];
                state.educationIdNumber = 0;
            }
            else {
                var lastElement = educationList[educationList.length - 1];
                state.educationIdNumber = lastElement.id;
                state.educationList = educationList;
            }
            // defaultResumse
            state.defaultResume = action.payload.defaultResume;
            // date
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
        //
        portpolioDetailFail: function () {
            return __assign({}, initialState);
        },
        // 포폴 리셋 하기
        portpolioReset: function () {
            return __assign({}, initialState);
        }
    }
});
exports.introTextEdit = (_a = portPolioSlice.actions, _a.introTextEdit), exports.careerFieldAdd = _a.careerFieldAdd, exports.careerFieldEdit = _a.careerFieldEdit, exports.careerFieldDelete = _a.careerFieldDelete, exports.educationFieldAdd = _a.educationFieldAdd, exports.educationFieldEdit = _a.educationFieldEdit, exports.educationFieldDelete = _a.educationFieldDelete, exports.portpolioDetailSuccess = _a.portpolioDetailSuccess, exports.portpolioDetailFail = _a.portpolioDetailFail, exports.portpolioReset = _a.portpolioReset;
exports.selectPortPolio = function (state) { return state.portpolio; };
exports["default"] = portPolioSlice;
