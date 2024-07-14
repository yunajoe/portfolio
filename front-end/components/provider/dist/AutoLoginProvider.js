"use client";
"use strict";
exports.__esModule = true;
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var react_1 = require("react");
function AutoLoginProvider(_a) {
    var children = _a.children, user = _a.user;
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        if (user) {
            dispatch(authSlice_1.loginSuccess(user));
        }
    }, []);
    return children;
}
exports["default"] = AutoLoginProvider;
