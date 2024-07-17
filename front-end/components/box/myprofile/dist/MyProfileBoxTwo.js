"use client";
"use strict";
exports.__esModule = true;
var Divider_1 = require("@/components/divider/Divider");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var bind_1 = require("classnames/bind");
var navigation_1 = require("next/navigation");
var MyProfileBoxTwo_module_scss_1 = require("./MyProfileBoxTwo.module.scss");
var cx = bind_1["default"].bind(MyProfileBoxTwo_module_scss_1["default"]);
function MyProfileBoxTwo(_a) {
    var userData = _a.userData;
    var dispatch = hooks_1.useAppDispatch();
    var useAuthSelector = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    var logOutStatus = useStatusSelector.logOutStatus;
    var router = navigation_1.useRouter(); // useRouter 훅 사용
    var handleLogOut = function () {
        dispatch({ type: "LOGOUT_REQUEST", _id: userData._id });
    };
    if (logOutStatus === 200) {
        router.push("/");
    }
    return (React.createElement("div", { className: cx("menu_container") },
        React.createElement("ul", { className: cx("menu_list") },
            React.createElement("li", null,
                React.createElement("span", { className: cx("text") }, "\uB0B4 \uD504\uB85C\uD544")),
            React.createElement("div", { className: cx("menu_list_divider") },
                React.createElement(Divider_1["default"], { color: "gray" })),
            React.createElement("li", { onClick: handleLogOut },
                React.createElement("span", { className: cx("text") }, "\uB85C\uADF8\uC544\uC6C3")))));
}
exports["default"] = MyProfileBoxTwo;
