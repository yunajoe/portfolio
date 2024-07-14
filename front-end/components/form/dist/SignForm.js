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
var LoginFormNavigationButton_1 = require("@/components/button/LoginFormNavigationButton");
var useCustomForm_1 = require("@/hooks/useCustomForm");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var react_1 = require("react");
var SignForm = react_1.memo(function SignForm(_a) {
    var _this = this;
    var type = _a.type, emailLabel = _a.emailLabel, passwordLabel = _a.passwordLabel, buttonText = _a.buttonText, gotoRegister = _a.gotoRegister, setGotoRegister = _a.setGotoRegister;
    var dispatch = hooks_1.useAppDispatch();
    var form = useCustomForm_1["default"](type);
    var handleSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
        var username, email, password;
        return __generator(this, function (_a) {
            username = values.username, email = values.email, password = values.password;
            if (type === "login") {
                dispatch({
                    type: "LOCAL_LOGIN_REQUEST",
                    email: email,
                    password: password
                });
            }
            else if (type === "register") {
                dispatch({
                    type: "LOCAL_REGISTER_REQUEST",
                    username: username,
                    email: email,
                    password: password
                });
            }
            return [2 /*return*/];
        });
    }); };
    var handleGotoRegister = function () {
        form.reset();
        setGotoRegister(true);
    };
    var handleGotoLogin = function () {
        form.reset();
        setGotoRegister(false);
    };
    var loginBottomText = (React.createElement(core_1.Stack, { justify: "center", align: "center" },
        React.createElement(LoginFormNavigationButton_1["default"], { text: "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4\uBC84\uB838\uB2C8\uAE4C?", onClick: function () { return console.log("하잇"); } }),
        React.createElement(LoginFormNavigationButton_1["default"], { text: "\uACC4\uC815\uC774 \uC5C6\uC2B5\uB2C8\uAE4C? \uD68C\uC6D0\uAC00\uC785\uD558\uB7EC \uAC00\uAE30", onClick: handleGotoRegister })));
    var registerBottomText = (React.createElement(core_1.Stack, { justify: "center", align: "center" },
        React.createElement(LoginFormNavigationButton_1["default"], { text: "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC2B5\uB2C8\uAE4C? \uB85C\uADF8\uC778\uD558\uB7EC \uAC00\uAE30", onClick: handleGotoLogin })));
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { onSubmit: form.onSubmit(function (values) { return handleSubmit(values); }) },
            type === "register" && (React.createElement(core_1.TextInput, __assign({ withAsterisk: true, label: "username", placeholder: "username", key: form.key("username") }, form.getInputProps("username"), { w: "300" }))),
            React.createElement(core_1.TextInput, __assign({ withAsterisk: true, label: emailLabel, placeholder: "your email", key: form.key("email") }, form.getInputProps("email"), { w: "300" })),
            React.createElement(core_1.PasswordInput, __assign({ withAsterisk: true, label: passwordLabel, placeholder: "your password", key: form.key("password") }, form.getInputProps("password"), { w: "300", mb: "10" })),
            React.createElement(core_1.Button, { w: "300", type: "submit" }, buttonText)),
        !gotoRegister ? loginBottomText : registerBottomText));
});
exports["default"] = SignForm;
