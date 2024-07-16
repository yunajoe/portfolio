"use strict";
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
var bind_1 = require("classnames/bind");
var user_1 = require("@/api/user");
var MyProfileBox_1 = require("@/components/box/mypofile/MyProfileBox");
var MyProfileBoxTwo_1 = require("@/components/box/mypofile/MyProfileBoxTwo");
var Divider_1 = require("@/components/divider/Divider");
var cookies_next_1 = require("cookies-next");
var headers_1 = require("next/headers");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function getUserData() {
    return __awaiter(this, void 0, void 0, function () {
        var refreshToken, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cookies_next_1.getCookie("refreshToken", { cookies: headers_1.cookies })];
                case 1:
                    refreshToken = _a.sent();
                    if (!refreshToken) return [3 /*break*/, 3];
                    return [4 /*yield*/, user_1.getUserInfoByRefreshToken(refreshToken)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function Page() {
    return __awaiter(this, void 0, void 0, function () {
        var userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserData()];
                case 1:
                    userData = _a.sent();
                    // TODO: 데이터를 이렇게 가꼬오지말고, 컴퍼넌트에서 가져오기
                    return [2 /*return*/, (React.createElement("div", { className: cx("grid_container") },
                            React.createElement(MyProfileBoxTwo_1["default"], { userData: userData.user_data }),
                            React.createElement(Divider_1["default"], { color: "gray" }),
                            React.createElement(MyProfileBox_1["default"], { userData: userData.user_data })))];
            }
        });
    });
}
exports["default"] = Page;
// export default Page;
