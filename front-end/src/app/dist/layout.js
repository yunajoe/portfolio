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
// https://mantine.dev/styles/responsive/
var search_1 = require("@/api/search");
var user_1 = require("@/api/user");
var AutoLoginProvider_1 = require("@/components/provider/AutoLoginProvider");
var notoSansKr_1 = require("@/public/fonts/notoSansKr");
var StoreProvider_1 = require("@/src/app/StoreProvider");
require("@/styles/global.scss");
require("@/styles/reset.scss");
var core_1 = require("@mantine/core");
require("@mantine/core/styles.css");
var cookies_next_1 = require("cookies-next");
var headers_1 = require("next/headers");
var userDataFetchFunc = function () { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cookies_next_1.getCookie("refreshToken", { cookies: headers_1.cookies })];
            case 1:
                refreshToken = _a.sent();
                if (!refreshToken) return [3 /*break*/, 3];
                return [4 /*yield*/, user_1.getUserInfoByRefreshToken(refreshToken)];
            case 2:
                user = _a.sent();
                return [2 /*return*/, user];
            case 3: return [2 /*return*/];
        }
    });
}); };
// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
function getMajor() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, search_1.searchMajor()];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
function getCompany() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, search_1.searchCompany()];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
function RootLayout(_a) {
    var children = _a.children;
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, userDataFetchFunc()];
                case 1:
                    user = _b.sent();
                    // const majorData = getMajor();
                    // const companyData = getCompany();
                    // const [majorList, companyList] = await Promise.all([majorData, companyData]);
                    return [2 /*return*/, (React.createElement("html", { lang: "en", className: "" + notoSansKr_1.notoSansKrMedium },
                            React.createElement("body", null,
                                React.createElement(StoreProvider_1["default"], null,
                                    React.createElement(core_1.MantineProvider, null,
                                        React.createElement(AutoLoginProvider_1["default"], { user: user === null || user === void 0 ? void 0 : user.data }, children))))))];
            }
        });
    });
}
exports["default"] = RootLayout;
