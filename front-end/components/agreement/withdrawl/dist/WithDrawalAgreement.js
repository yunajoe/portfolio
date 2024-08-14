"use client";
"use strict";
exports.__esModule = true;
var WidthDrawlWarningText_1 = require("@/components/agreement/withdrawl/WidthDrawlWarningText");
var WithDrawalAccount_1 = require("@/components/agreement/withdrawl/WithDrawalAccount");
var WithDrawalSign_1 = require("@/components/agreement/withdrawl/WithDrawalSign");
var WithDrawalButton_1 = require("@/components/button/WithDrawalButton");
var Divider_1 = require("@/components/divider/Divider");
var text_1 = require("@/constant/text");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var bind_1 = require("classnames/bind");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var WithDrawalAgreement_module_scss_1 = require("./WithDrawalAgreement.module.scss");
var cx = bind_1["default"].bind(WithDrawalAgreement_module_scss_1["default"]);
function WithDrawalAgreement() {
    var _a = react_1.useState({
        first_option: false,
        second_option: false
    }), agreeSelectOptions = _a[0], setAgreeSelectOptions = _a[1];
    var _b = react_1.useState(false), withDrawlButton = _b[0], setWithDrawlButton = _b[1];
    var useAuthSelector = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    var userData = useAuthSelector.userData;
    var deleteUserStatus = useStatusSelector.deleteUserStatus;
    var dispatch = hooks_1.useAppDispatch();
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        if (deleteUserStatus === 200) {
            router.push("/auth/login");
        }
        return function () {
            dispatch(statusSlice_1.deleteUserStatusReset());
        };
    }, [deleteUserStatus]);
    return (React.createElement("form", { className: cx("form") },
        React.createElement("fieldset", null,
            React.createElement("legend", { className: cx("title") },
                React.createElement("h1", null, "\uD68C\uC6D0 \uD0C8\uD1F4 \uC2DC \uC8FC\uC758\uC0AC\uD56D")),
            React.createElement(WidthDrawlWarningText_1["default"], { warningArray: text_1.warning_text_one }),
            React.createElement(WidthDrawlWarningText_1["default"], { warningArray: text_1.warning_text_two }),
            React.createElement(WidthDrawlWarningText_1["default"], { warningArray: text_1.warning_text_three }),
            React.createElement(Divider_1["default"], null),
            React.createElement(WithDrawalAccount_1["default"], { userData: userData }),
            React.createElement(Divider_1["default"], null),
            React.createElement(WithDrawalSign_1["default"], { agreeSelectOptions: agreeSelectOptions, setAgreeSelectOptions: setAgreeSelectOptions }),
            React.createElement(WithDrawalButton_1["default"], { agreeSelectOptions: agreeSelectOptions, withDrawlButton: withDrawlButton, setWithDrawlButton: setWithDrawlButton, userData: userData }))));
}
exports["default"] = WithDrawalAgreement;
