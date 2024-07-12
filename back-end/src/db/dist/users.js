"use strict";
// db에 관련하는 펑션들
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
exports.findUserByUsersTableId = exports.updatePortPolioQuery = exports.insertPortPolioQuery = exports.isUserAlreadyExist = exports.whichAuthLogin = exports.findUserQueryByKaKaoId = exports.insertUserQuery = void 0;
var mongodb_1 = require("mongodb");
var _1 = require(".");
// kakao_db에 정보넣기
exports.insertUserQuery = function (newUserData) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _1.db.collection("users").insertOne(newUserData)];
            case 1:
                _a.sent();
                console.log("1 user inserted가 되었습니다");
                _1.client.close();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error("Error inserting user:", err_1);
                throw err_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
// kakao_ID로 사람 찾기
exports.findUserQueryByKaKaoId = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _1.db.collection("users").findOne({ kakao_id: id })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
            case 2:
                err_2 = _a.sent();
                console.error("Error inserting user:", err_2);
                throw err_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
//  어떤걸로 로그인이 되어있는지 check, 카카오? 구글? 일반?
exports.whichAuthLogin = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };
// portpolio테이블에 user정보가 있는지 확인하는 쿼리
exports.isUserAlreadyExist = function (uniqueId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _1.db.collection("portpolio").findOne({
                        users_table_id: uniqueId
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// 신규 회원일 경우 portpolio 테이블에 데이터 넣는 쿼리
exports.insertPortPolioQuery = function (newPortPolioData) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _1.db.collection("portpolio").insertOne(newPortPolioData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
            case 2:
                err_4 = _a.sent();
                console.error("Error inserting user:", err_4);
                throw err_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
// 기존 회원일 경우 portpolio 테이블에 업데이트 하는 쿼리
exports.updatePortPolioQuery = function (existPortPolioData) { return __awaiter(void 0, void 0, void 0, function () {
    var err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _1.db.collection("portpolio").updateOne({
                        users_table_id: existPortPolioData.users_table_id
                    }, // 업데이트 대상 문서의 조건
                    { $push: { portpolio_ids: existPortPolioData.portpolio_id } } // $push 연산자를 사용하여 portpolio_ids 배열에 새로운 값을 추가
                    )];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.error("Error updating portpolio:", err_5);
                throw err_5;
            case 3: return [2 /*return*/];
        }
    });
}); };
/// users_table_id로 user테이블에서 정보 빼내기
exports.findUserByUsersTableId = function (users_table_id) { return __awaiter(void 0, void 0, void 0, function () {
    var Object_Id, result, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(users_table_id !== "")) return [3 /*break*/, 4];
                Object_Id = new mongodb_1.ObjectId(users_table_id.toString());
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, _1.db.collection("users").findOne({
                        _id: Object_Id
                    })];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                err_6 = _a.sent();
                console.error(err_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
//
