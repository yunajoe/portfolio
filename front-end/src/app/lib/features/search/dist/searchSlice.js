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
exports.selectSearch = exports.getMajorListFail = exports.getMajorListSuccess = exports.getCompanyListFail = exports.getCompanyListSuccess = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    status: null,
    majorData: [],
    companyData: []
};
var searchSlice = toolkit_1.createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        getCompanyListSuccess: function (state, action) {
            state.status = 200;
            state.companyData = action.payload;
        },
        getCompanyListFail: function (state, action) {
            return __assign({}, initialState);
        },
        getMajorListSuccess: function (state, action) {
            state.status = 200;
            state.majorData = action.payload;
        },
        getMajorListFail: function (state, action) {
            return __assign({}, initialState);
        }
    }
});
exports.getCompanyListSuccess = (_a = searchSlice.actions, _a.getCompanyListSuccess), exports.getCompanyListFail = _a.getCompanyListFail, exports.getMajorListSuccess = _a.getMajorListSuccess, exports.getMajorListFail = _a.getMajorListFail;
exports.selectSearch = function (state) { return state.search; };
exports["default"] = searchSlice;
