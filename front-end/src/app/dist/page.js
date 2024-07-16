"use client";
"use strict";
exports.__esModule = true;
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var navigation_1 = require("next/navigation");
// 처음 웹에 들어왔을떄의 메인 화면
// 자동 로그인 승인 여부 체크박스 만들기
function Home() {
    var dispatch = hooks_1.useAppDispatch();
    var router = navigation_1.useRouter();
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    var logOutStatus = useStatusSelector.logOutStatus;
    var useAuthSelector = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var navigateToMyPortPolioPage = function () {
        router.push("/myportpolio");
    };
    var navigateToLoginPage = function () {
        router.push("/auth/login");
    };
    var navigateToBoardPage = function () {
        router.push("/board");
    };
    if (logOutStatus === 200) {
        dispatch(statusSlice_1.logOutStatusReset());
    }
    var gotoMyPortPolio = (React.createElement(core_1.Button, { variant: "default", onClick: navigateToMyPortPolioPage }, "\uB098\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uB7EC\uAC00\uAE30"));
    var gotoCreatePortPolio = (React.createElement(core_1.Button, { variant: "default", onClick: navigateToLoginPage }, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uB9CC\uB4E4\uB7EC\uAC00\uAE30"));
    return (React.createElement(core_1.Center, { bg: "blue", h: "100vh" },
        React.createElement(core_1.Stack, { justify: "center", gap: "30", w: "300px" },
            React.createElement(core_1.Button, { variant: "default", onClick: navigateToBoardPage }, "portpolio\uBCF4\uB7EC\uAC00\uAE30"),
            useAuthSelector.isLogin ? gotoMyPortPolio : gotoCreatePortPolio)));
}
exports["default"] = Home;
