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
exports.portPolioSaga = void 0;
var portpolio_1 = require("@/api/portpolio");
var portpolioResultSlice_1 = require("@/src/app/lib/features/portpolio/portpolioResultSlice");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var effects_1 = require("redux-saga/effects");
// function* getPortPolioListSaga(action: any): any {
//   try {
//     const data = yield call(getPortPolioList, action);
//     const result = data.data;
//     console.log("result", result);
//     if (result.status === 200) {
//       yield put(portpolioListSuccess(result.result));
//     } else {
//       yield put(accessTokenStatus(result));
//     }
//   } catch (err) {
//     yield put(portpolioListFail());
//   }
// }
function getPortPolioDetailListSaga(action) {
    var data, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 7]);
                return [4 /*yield*/, effects_1.call(portpolio_1.getPortPolioDetailList, action.users_table_id)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(portpolioResultSlice_1.portpolioDetailListSuccess(result))];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.portpolioListStatus(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 7];
            case 4:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(portpolioResultSlice_1.portpolioDetailListFail(error_1.data))];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.portpolioListStatus(error_1.data))];
            case 6:
                _a.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function getPortPolioDetailSaga(action) {
    var data, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 7]);
                return [4 /*yield*/, effects_1.call(portpolio_1.getDetailPortPolio, action.portpolioId)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(portpolioSlice_1.portpolioDetailSuccess(result.result))];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.portpolioDetailStatus(result))];
            case 3:
                _a.sent();
                return [3 /*break*/, 7];
            case 4:
                error_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(portpolioSlice_1.portpolioDetailFail())];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.portpolioDetailStatus(error_2.data))];
            case 6:
                _a.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
function getDefaultPortPolioSaga(action) {
    var data, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(portpolio_1.getUserDefaultPortPolio, action._id)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(portpolioResultSlice_1.getDefaultPortPolioSuccess(result.result))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function createPortPolioSaga(action) {
    var data, result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(portpolio_1.createPortPolio)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(portpolioResultSlice_1.portpolioCreateSuccess(result))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(portpolioResultSlice_1.portpolioCreateFail())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function savePortPolioSaga(action) {
    var data, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(portpolio_1.savePortPolio, action)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(statusSlice_1.savePortPolioStatus(result))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.savePortPolioStatus(error_3.data))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function deletePortPolioSaga(action) {
    var data, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(portpolio_1.deletePortPolio, action)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(statusSlice_1.deletePortPolioStatus(result))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_4 = _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.deletePortPolioStatus(error_4.data))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function updateDefaultPortPolioSaga(action) {
    var data, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(portpolio_1.updateDefaultPortPolio, action)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(statusSlice_1.defaultPortPolioStatus(result))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_5 = _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.defaultPortPolioStatus(error_5.data))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function updatePortPolioNameSaga(action) {
    var data, result, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(portpolio_1.updatePortPolioName, action)];
            case 1:
                data = _a.sent();
                result = data.data;
                return [4 /*yield*/, effects_1.put(statusSlice_1.updatePortPolioNameStatus(result))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_6 = _a.sent();
                return [4 /*yield*/, effects_1.put(statusSlice_1.updatePortPolioNameStatus(error_6.data))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function portPolioSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // yield takeEvery("GET_PORT_POLIO_LIST_REQUEST", getPortPolioListSaga);
            return [4 /*yield*/, effects_1.takeEvery("GET_PORT_POLIO_DETAIL_LIST_REQUEST", getPortPolioDetailListSaga)];
            case 1:
                // yield takeEvery("GET_PORT_POLIO_LIST_REQUEST", getPortPolioListSaga);
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("GET_PORT_POLIO_DETAIL_REQUEST", getPortPolioDetailSaga)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("GET_PORT_POLIO_DEFAULT_REQUEST", getDefaultPortPolioSaga)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("CREATE_PORT_POLIO_REQUEST", createPortPolioSaga)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("SAVE_PORT_POLIO_REQUEST", savePortPolioSaga)];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("DELETE_PORT_POLIO_REQUEST", deletePortPolioSaga)];
            case 6:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("UPDATE_DEFAULT_PORT_POLIO_REQUEST", updateDefaultPortPolioSaga)];
            case 7:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery("UPDATE_PORT_POLIO_NAME_REQUEST", updatePortPolioNameSaga)];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.portPolioSaga = portPolioSaga;
