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
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var portpolio_1 = require("../db/portpolio");
var school_1 = require("../db/school");
var users_1 = require("../db/users");
var token_1 = require("../utils/token");
var career_1 = require("../db/career");
var crypto = require("crypto");
dotenv_1["default"].config();
var homeRouter = express_1.Router();
homeRouter.get("/", function (req, res) {
    res.send("나는야홈");
});
homeRouter.get("/createPortPolio", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, result, decodedTokenValue, key, targetUser, uniqueKey, isAlreadyUserInTable, initialData, result_1, obj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                accessToken = req.headers.authorization;
                result = token_1.validationToken(accessToken);
                if (!(result === 200)) return [3 /*break*/, 9];
                decodedTokenValue = token_1.decodeToken(accessToken);
                key = decodedTokenValue.key;
                return [4 /*yield*/, users_1.findUserQueryByKaKaoId(key)];
            case 1:
                targetUser = _a.sent();
                uniqueKey = crypto.randomBytes(16).toString("hex");
                return [4 /*yield*/, users_1.isUserAlreadyExist(targetUser._id)];
            case 2:
                isAlreadyUserInTable = _a.sent();
                if (!isAlreadyUserInTable) return [3 /*break*/, 4];
                return [4 /*yield*/, users_1.updatePortPolioQuery({
                        users_table_id: targetUser._id,
                        portpolio_id: uniqueKey
                    })];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4: 
            // user가 테이블에 없으면은 insert
            return [4 /*yield*/, users_1.insertPortPolioQuery({
                    users_table_id: targetUser._id,
                    portpolio_ids: [uniqueKey]
                })];
            case 5:
                // user가 테이블에 없으면은 insert
                _a.sent();
                _a.label = 6;
            case 6:
                initialData = {
                    portpolioId: uniqueKey,
                    introText: "",
                    careerList: [],
                    educationList: [],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    defaultResume: false
                };
                return [4 /*yield*/, portpolio_1.getPortPolioList()];
            case 7:
                result_1 = _a.sent();
                obj = result_1[result_1.length - 1];
                if (obj.portpolio_ids.length === 1) {
                    initialData.defaultResume = true;
                }
                return [4 /*yield*/, portpolio_1.insertPortPolioContentsQuery(initialData)];
            case 8:
                _a.sent();
                return [2 /*return*/, res.json({
                        key: uniqueKey
                    })];
            case 9: return [2 /*return*/];
        }
    });
}); });
homeRouter.get("/school/list", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, school_1.getSchoolListQuery()];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.send(data)];
            case 2:
                err_1 = _a.sent();
                throw err_1;
            case 3: return [2 /*return*/];
        }
    });
}); });
homeRouter.get("/school/list/search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchQuery, data, filteredData, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchQuery = req.query.schoolName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, school_1.getSchoolListQuery()];
            case 2:
                data = _a.sent();
                filteredData = data.filter(function (school) {
                    var isValid = true;
                    if (school.schoolName.includes(searchQuery)) {
                        isValid = true;
                    }
                    else {
                        isValid = false;
                    }
                    return isValid;
                });
                return [2 /*return*/, res.send(filteredData)];
            case 3:
                err_2 = _a.sent();
                throw err_2;
            case 4: return [2 /*return*/];
        }
    });
}); });
homeRouter.get("/major/list", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, school_1.getMajorListQuery()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.send(result)];
            case 2:
                err_3 = _a.sent();
                throw err_3;
            case 3: return [2 /*return*/];
        }
    });
}); });
homeRouter.get("/company/list", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, career_1.getCompanyListQuery()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.send(result)];
            case 2:
                err_4 = _a.sent();
                throw err_4;
            case 3: return [2 /*return*/];
        }
    });
}); });
//  저장된 포트폴리오 리스트로 가져오기
homeRouter.get("/portpolio/list", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, portpolio_1.getPortPolioList()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.send(result)];
            case 2:
                err_5 = _a.sent();
                throw err_5;
            case 3: return [2 /*return*/];
        }
    });
}); });
homeRouter.get("/portpolio/detail/list", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, portpolio_1.getPortPolioContentsList()];
            case 1:
                result = _a.sent();
                result.sort(function (a, b) {
                    return (new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
                });
                return [2 /*return*/, res.send(result)];
            case 2:
                err_6 = _a.sent();
                throw err_6;
            case 3: return [2 /*return*/];
        }
    });
}); });
//  포트폴리오 상세 내용 가져오기
homeRouter.get("/portpolio/detail", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var portpolioId, result, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                portpolioId = req.query.portpolio_id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, portpolio_1.getPortPolioContentsQuery(portpolioId)];
            case 2:
                result = _a.sent();
                return [2 /*return*/, res.send(result)];
            case 3:
                err_7 = _a.sent();
                throw err_7;
            case 4: return [2 /*return*/];
        }
    });
}); });
// 포트폴리오 저장하기
homeRouter.post("/portpolio/save", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body.data;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, portpolio_1.insertPortPolioContentsQuery(data)];
            case 2:
                result = _a.sent();
                if (result) {
                    return [2 /*return*/, res.send({
                            status: 200
                        })];
                }
                else {
                    return [2 /*return*/, res.send({
                            status: 400
                        })];
                }
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                throw err_8;
            case 4: return [2 /*return*/];
        }
    });
}); });
// 포트폴리오의 기본 이력서 변경하기
homeRouter.post("/portpolio/changeToDefaultResume", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body.data;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, portpolio_1.updatedToDefaultResume(data)];
            case 2:
                result = _a.sent();
                if (result) {
                    return [2 /*return*/, res.send({
                            status: 200,
                            message: "기본 이력서가 변경 되었습니다"
                        })];
                }
                else {
                    return [2 /*return*/, res.send({
                            status: 400
                        })];
                }
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                throw err_9;
            case 4: return [2 /*return*/];
        }
    });
}); });
module.exports = homeRouter;
