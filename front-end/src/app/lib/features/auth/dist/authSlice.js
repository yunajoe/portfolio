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
exports.selectAuth = exports.loginFail = exports.loginSuccess = exports.registerFail = exports.registerSuccess = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var cookies_next_1 = require("cookies-next");
var initialState = {
    isLogin: false,
    status: null,
    message: "",
    userData: {
        _id: "",
        username: "",
        email: "",
        type: "",
        tokenKeyValue: ""
    }
};
var authSlice = toolkit_1.createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        registerSuccess: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message, access_token = _a.access_token, refresh_token = _a.refresh_token, user_data = _a.user_data;
            cookies_next_1.setCookie("accessToken", access_token);
            cookies_next_1.setCookie("refreshToken", refresh_token);
            (state.isLogin = true),
                (state.status = status),
                (state.message = message);
            state.userData = user_data;
        },
        registerFail: function (state, action) {
            return __assign({}, initialState);
        },
        loginSuccess: function (state, action) {
            var _a = action.payload, status = _a.status, message = _a.message, access_token = _a.access_token, refresh_token = _a.refresh_token, user_data = _a.user_data;
            if (status === 200) {
                // 로그인성공할때 쿠키저장
                cookies_next_1.setCookie("accessToken", access_token);
                cookies_next_1.setCookie("refreshToken", refresh_token);
                (state.isLogin = true),
                    (state.status = status),
                    (state.message = message);
                state.userData = user_data;
            }
            else {
                return __assign(__assign({}, initialState), { status: action.payload.status });
            }
        },
        loginFail: function (state, action) {
            // status는  payload값으로 안 넘어옴 와이?
            return __assign({}, initialState);
        }
    }
});
// 액션
exports.registerSuccess = (_a = authSlice.actions, _a.registerSuccess), exports.registerFail = _a.registerFail, exports.loginSuccess = _a.loginSuccess, exports.loginFail = _a.loginFail;
// selectore
exports.selectAuth = function (state) { return state.auth; };
exports["default"] = authSlice;
