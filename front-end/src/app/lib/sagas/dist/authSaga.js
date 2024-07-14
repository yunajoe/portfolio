"use client";
"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.authSaga = void 0;
var auth_1 = require("@/api/auth");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var effects_1 = require("redux-saga/effects");
function kakaoLoginUser(action) {
    var result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(auth_1.getKaKaoAccessToken, action.code)];
            case 1:
                result = _a.sent();
                console.log("result", result.data);
                return [4 /*yield*/, effects_1.put(authSlice_1.loginSuccess(result.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(authSlice_1.loginFail(err_1))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
// 일반으로 회원가입할떄
function localRegisterUser(action) {
    var result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(auth_1.registerLocal, action)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(authSlice_1.registerSuccess(result.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(authSlice_1.registerFail(err_2))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function localLoginUser(action) {
    var result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(auth_1.loginLocal, action)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(authSlice_1.loginSuccess(result.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(authSlice_1.loginFail(err_3))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
// refresh토큰으로 accessToken
function authSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery("KAKAO_LOGIN_REQUEST", kakaoLoginUser)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("LOCAL_REGISTER_REQUEST", localRegisterUser)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("LOCAL_LOGIN_REQUEST", localLoginUser)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.authSaga = authSaga;
