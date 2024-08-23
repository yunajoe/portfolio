"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var loading_1 = require("@/src/app/loading");
var navigation_2 = require("next/navigation");
function Page() {
    var searchParams = navigation_1.useSearchParams();
    var code = searchParams.get("code");
    var router = navigation_2.useRouter();
    var dispatch = hooks_1.useAppDispatch();
    var useAuthSelector = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var passTheCodeToServer = function () {
        if (useAuthSelector.isLogin) {
            router.push("/");
        }
    };
    react_1.useEffect(function () {
        if (code !== null) {
            dispatch({ type: "KAKAO_LOGIN_REQUEST", code: code });
        }
    }, []);
    react_1.useEffect(function () {
        passTheCodeToServer();
    }, [useAuthSelector.isLogin]);
    return (React.createElement("div", null,
        React.createElement(loading_1["default"], null)));
}
exports["default"] = Page;
