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
exports.getDefaultPortPolio = exports.updatePortPolioName = exports.updateDefaultPortPolio = exports.deletePortPolio = exports.getDetailPortPolio = exports.getListPortPolioDetail = exports.getPortPolioList = exports.savePortPolio = exports.createPortPolio = void 0;
var _1 = require(".");
// CREATE 포폴
exports.createPortPolio = function (accessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _1["default"].get("createPortPolio", {
                    headers: {
                        Authorization: accessToken
                    }
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.savePortPolio = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var portpolioId, introText, careerList, educationList, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                portpolioId = data.portpolioId, introText = data.introText, careerList = data.careerList, educationList = data.educationList;
                return [4 /*yield*/, _1["default"].post("portpolio/save", {
                        data: {
                            portpolioId: portpolioId,
                            introText: introText,
                            careerList: careerList,
                            educationList: educationList
                        }
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.getPortPolioList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, users_table_id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                accessToken = data.accessToken, users_table_id = data.users_table_id;
                return [4 /*yield*/, _1["default"].post("portpolio/list", {
                        data: {
                            accessToken: accessToken,
                            users_table_id: users_table_id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// Detail List 포폴
exports.getListPortPolioDetail = function (users_table_id) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _1["default"].get("portpolio/detail/list", {
                    params: {
                        users_table_id: users_table_id
                    }
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// Detail 포폴
exports.getDetailPortPolio = function (portpolio_id) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _1["default"].get("portpolio/detail", {
                    params: {
                        portpolio_id: portpolio_id
                    }
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// 포폴삭제하기
exports.deletePortPolio = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var users_table_id, portpolio_id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                users_table_id = data.users_table_id, portpolio_id = data.portpolio_id;
                return [4 /*yield*/, _1["default"]["delete"]("portpolio/delete", {
                        data: {
                            users_table_id: users_table_id,
                            portpolio_id: portpolio_id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// default 포폴로 업데이트
exports.updateDefaultPortPolio = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var users_table_id, portpolio_id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                users_table_id = data.users_table_id, portpolio_id = data.portpolio_id;
                return [4 /*yield*/, _1["default"].post("portpolio/changeToDefaultResume", {
                        data: {
                            users_table_id: users_table_id,
                            portpolio_id: portpolio_id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// 포폴 이름 업데이트
exports.updatePortPolioName = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var users_table_id, portpolio_id, portpolio_name, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                users_table_id = data.users_table_id, portpolio_id = data.portpolio_id, portpolio_name = data.portpolio_name;
                return [4 /*yield*/, _1["default"].post("portpolio/editPortPolioName", {
                        data: {
                            users_table_id: users_table_id,
                            portpolio_id: portpolio_id,
                            portpolio_name: portpolio_name
                        }
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// default 포폴 가져오기
exports.getDefaultPortPolio = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _1["default"].get("portpolio/default/list")];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
