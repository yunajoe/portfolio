"use strict";
exports.__esModule = true;
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
function useLogOut() {
    var dispatch = hooks_1.useAppDispatch();
    var router = navigation_1.useRouter();
    var _a = hooks_1.useAppSelector(authSlice_1.selectAuth), userData = _a.userData, logoutStatus = _a.logoutStatus, logoutMessage = _a.logoutMessage;
    var handleLogout = function () {
        dispatch({ type: "LOGOUT_REQUEST", _id: userData._id });
    };
    react_1.useEffect(function () {
        if (logoutStatus === 200) {
            router.push("/");
            dispatch(authSlice_1.authReset());
        }
    }, [logoutStatus]);
    return handleLogout;
}
exports["default"] = useLogOut;
