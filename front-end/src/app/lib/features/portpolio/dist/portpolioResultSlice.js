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
exports.selectPortPolioResult = exports.portpolioSaveFail = exports.portpolioDetailListFail = exports.portpolioDetailListSuccess = exports.portpolioListFail = exports.portpolioListSuccess = exports.portpolioCreateFail = exports.portpolioCreateSuccess = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    current_portpolio_id: null,
    // popolist_list request
    _id: "",
    users_table_id: "",
    username: "",
    email: "",
    portpolio_ids: [],
    type: "",
    // getListPortPolioDetail
    portpolio_detail_arr: []
};
var portPolioResultSlice = toolkit_1.createSlice({
    name: "portpolioResult",
    initialState: initialState,
    reducers: {
        // 포폴 생성 성공여부
        portpolioCreateSuccess: function (state, action) {
            state.current_portpolio_id = action.payload.key;
        },
        portpolioCreateFail: function () {
            return __assign({}, initialState);
        },
        // 포폴 읽기 성공 여부..
        portpolioListSuccess: function (state, action) {
            var _a = action.payload[0], _id = _a._id, users_table_id = _a.users_table_id, username = _a.username, email = _a.email, portpolio_ids = _a.portpolio_ids, type = _a.type;
            return __assign(__assign({}, state), { _id: _id, username: username, email: email, users_table_id: users_table_id, portpolio_ids: portpolio_ids, type: type });
        },
        portpolioListFail: function () {
            return __assign({}, initialState);
        },
        portpolioDetailListSuccess: function (state, action) {
            return __assign(__assign({}, state), { portpolio_detail_arr: action.payload });
        },
        portpolioDetailListFail: function () {
            return __assign({}, initialState);
        },
        //  포폴저장 성공 여부
        // portpolioSaveSuccess: (state, action) => {
        //   console.log("actopn", action.payload);
        //   const { data, status } = action.payload;
        //   const { portpolioId } = data;
        //   const updatePortfolios = state.portpolio_detail_arr.map((item) => {
        //     if (item.portpolioId === portpolioId) {
        //       return {
        //         ...item,
        //         introText: data.introText,
        //         careerList: data.careerList,
        //         educationList: data.educationList,
        //       };
        //     }
        //     return item;
        //   });
        //   return {
        //     ...state,
        //     portpolio_detail_arr: updatePortfolios,
        //   };
        // },
        portpolioSaveFail: function () {
            return __assign({}, initialState);
        }
    }
});
exports.portpolioCreateSuccess = (_a = portPolioResultSlice.actions, _a.portpolioCreateSuccess), exports.portpolioCreateFail = _a.portpolioCreateFail, exports.portpolioListSuccess = _a.portpolioListSuccess, exports.portpolioListFail = _a.portpolioListFail, exports.portpolioDetailListSuccess = _a.portpolioDetailListSuccess, exports.portpolioDetailListFail = _a.portpolioDetailListFail, 
// portpolioSaveSuccess,
exports.portpolioSaveFail = _a.portpolioSaveFail;
exports.selectPortPolioResult = function (state) {
    return state.portpolioResult;
};
exports["default"] = portPolioResultSlice;
