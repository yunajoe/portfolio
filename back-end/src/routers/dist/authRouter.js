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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var qs_1 = require("qs");
var api_1 = require("../api");
var auth_1 = require("../api/auth");
var db_1 = require("../db");
var users_1 = require("../db/users");
var token_1 = require("../utils/token");
dotenv_1["default"].config();
var jwt = require("jsonwebtoken");
var authRouter = express_1.Router();
authRouter.get("/auth", function (req, res) {
    res.send("Auth페이지입니다");
});
authRouter.post("/auth/login", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var code, data, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                code = req.body.code;
                data = {
                    grant_type: "authorization_code",
                    client_id: process.env.KAKAO_CLIENT_ID,
                    redirect_uri: process.env.KAKAO_REDIRECT_URL,
                    code: code
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api_1.instance(__assign(__assign({}, auth_1.getAccessTokenOptions), { data: qs_1["default"].stringify(data) }))];
            case 2:
                response = _a.sent();
                res.locals.result = response;
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                next(err_1);
                return [3 /*break*/, 4];
            case 4:
                next();
                return [2 /*return*/];
        }
    });
}); }, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, status, data, access_token, refresh_token, response, _b, id, kakao_account, newUserData, userData, err_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = res.locals.result, status = _a.status, data = _a.data;
                access_token = data.access_token, refresh_token = data.refresh_token;
                if (!(status === 200)) return [3 /*break*/, 7];
                _c.label = 1;
            case 1:
                _c.trys.push([1, 6, , 7]);
                return [4 /*yield*/, api_1.instance(__assign(__assign({}, auth_1.getUserInfoOptions), { headers: __assign(__assign({}, auth_1.getUserInfoOptions.headers), { Authorization: "Bearer " + access_token }) }))];
            case 2:
                response = _c.sent();
                _b = response.data, id = _b.id, kakao_account = _b.kakao_account;
                newUserData = {
                    kakao_id: id,
                    kakao_username: kakao_account.profile.nickname,
                    kakao_email: kakao_account.email,
                    isKaKaoLogin: true
                };
                // 다음 middleward에 넘겨줄려구
                res.locals.kakaoId = id;
                return [4 /*yield*/, db_1.db
                        .collection("users")
                        .find({ kakao_id: id })
                        .toArray()];
            case 3:
                userData = _c.sent();
                if (!(userData.length === 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, users_1.insertUserQuery(newUserData)];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_2 = _c.sent();
                console.error(err_2);
                next(err_2);
                return [3 /*break*/, 7];
            case 7:
                next();
                return [2 /*return*/];
        }
    });
}); }, 
// 우리반의 토큰을 생성하여서 보내기
function (req, res) {
    var status = res.locals.result.status;
    var payload = res.locals.kakaoId;
    var accessToken = token_1.makeAccessToken({ key: payload });
    var refreshToken = token_1.makeRefreshToken({ key: payload });
    if (status === 200) {
        // res.setHeader("Autorization", accessToken);
        // res.setHeader("Refreshtoken", refreshToken);
        return res.status(200).send({
            status: 200,
            message: "success",
            access_token: accessToken,
            refresh_token: refreshToken
        });
    }
    else {
        return res.status(400).send({
            status: 400,
            message: "fail"
        });
    }
});
authRouter.post("/auth/createAccessToken", function (req, res) {
    var refreshToken = req.body.refreshToken;
    var decidedRefreshToken = jwt.verify(refreshToken, process.env.SECRECT_KEY);
    try {
        var accessToken = token_1.makeAccessToken({ key: decidedRefreshToken.key });
        return accessToken;
    }
    catch (err) {
        return false;
    }
});
// 일반 회원가입
module.exports = authRouter;
