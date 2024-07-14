"use client";
"use strict";
var _a;
exports.__esModule = true;
exports.selectStatus = exports.updatePortPolioNameStatusReset = exports.defaultPortPolioReset = exports.defaultPortPolioStatus = exports.deletePortPolioStatus = exports.savePortPolioStatus = exports.updatePortPolioNameStatus = exports.refreshTokenStatus = exports.accessTokenStatus = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var cookies_next_1 = require("cookies-next");
var initialState = {
    accessTokenStatus: null,
    accessTokenMessage: "",
    refreshTokenStatus: null,
    refreshTokenMessage: "",
    defaultPortPolioStatus: null,
    defaultPortPolioMessage: "",
    updatePortPolioNameStatus: null,
    updatePortPolioNameMessage: "",
    savePortPolioStatus: null,
    savePortPolioMessage: "",
    deletePortPolioStatus: null,
    deletePortPolioMessage: ""
};
var statusSlice = toolkit_1.createSlice({
    name: "status",
    initialState: initialState,
    reducers: {
        accessTokenStatus: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message;
            state.accessTokenStatus = status;
            state.accessTokenMessage = message;
        },
        refreshTokenStatus: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message, accessToken = _a.accessToken, refreshToken = _a.refreshToken;
            if (status === 200) {
                cookies_next_1.setCookie("accessToken", accessToken);
            }
            else if (status === 402) {
                cookies_next_1.deleteCookie("accessToken", accessToken);
                cookies_next_1.deleteCookie("refreshToken", refreshToken);
            }
            state.refreshTokenStatus = status;
            state.refreshTokenMessage = message;
        },
        deletePortPolioStatus: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message;
            state.deletePortPolioStatus = status;
            state.deletePortPolioMessage = message;
        },
        savePortPolioStatus: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message;
            state.savePortPolioStatus = status;
            state.savePortPolioMessage = message;
        },
        updatePortPolioNameStatus: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message;
            state.updatePortPolioNameStatus = status;
            state.updatePortPolioNameMessage = message;
        },
        defaultPortPolioStatus: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message;
            state.defaultPortPolioStatus = status;
            state.defaultPortPolioMessage = message;
        },
        // reset
        defaultPortPolioReset: function (state) {
            state.defaultPortPolioStatus = null;
            state.defaultPortPolioMessage = "";
        },
        updatePortPolioNameStatusReset: function (state) {
            state.updatePortPolioNameStatus = null;
            state.updatePortPolioNameMessage = "";
        }
    }
});
// 액션
exports.accessTokenStatus = (_a = statusSlice.actions, _a.accessTokenStatus), exports.refreshTokenStatus = _a.refreshTokenStatus, exports.updatePortPolioNameStatus = _a.updatePortPolioNameStatus, exports.savePortPolioStatus = _a.savePortPolioStatus, exports.deletePortPolioStatus = _a.deletePortPolioStatus, exports.defaultPortPolioStatus = _a.defaultPortPolioStatus, exports.defaultPortPolioReset = _a.defaultPortPolioReset, exports.updatePortPolioNameStatusReset = _a.updatePortPolioNameStatusReset;
// selectore
exports.selectStatus = function (state) { return state.status; };
exports["default"] = statusSlice;
