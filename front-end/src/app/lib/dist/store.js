"use strict";
exports.__esModule = true;
exports.makeStore = void 0;
var core_1 = require("@redux-saga/core");
var toolkit_1 = require("@reduxjs/toolkit");
var authSlice_1 = require("./features/auth/authSlice");
var portpolioResultSlice_1 = require("@/src/app/lib/features/portpolio/portpolioResultSlice");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var searchSlice_1 = require("@/src/app/lib/features/search/searchSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var userSlice_1 = require("@/src/app/lib/features/user/userSlice");
var sagas_1 = require("@/src/app/lib/sagas");
// reducer들 모아넣기
var rootReducer = toolkit_1.combineReducers({
    auth: authSlice_1["default"].reducer,
    portpolio: portpolioSlice_1["default"].reducer,
    portpolioResult: portpolioResultSlice_1["default"].reducer,
    search: searchSlice_1["default"].reducer,
    user: userSlice_1["default"].reducer,
    status: statusSlice_1["default"].reducer
});
// 애기서부터 store
exports.makeStore = function () {
    var sagaMiddleware = core_1["default"]();
    var store = toolkit_1.configureStore({
        reducer: rootReducer,
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware({
                thunk: false,
                serializableCheck: false
            }).concat(sagaMiddleware);
        }
    });
    sagaMiddleware.run(sagas_1["default"]);
    return store;
};
