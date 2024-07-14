"use strict";
exports.__esModule = true;
var formInputRegex_1 = require("@/utils/formInputRegex");
var form_1 = require("@mantine/form");
var registerInitialValue = {
    username: "",
    email: "",
    password: ""
};
var loginInitialValue = {
    email: "",
    password: ""
};
var registerValidation = {
    username: function (value) {
        return formInputRegex_1.usernameRegexFunc(value) ? null : "유효하지않은 username형식";
    },
    email: function (value) {
        return formInputRegex_1.emailRegexFunc(value) ? null : "유효하지 않은 email형식";
    },
    password: function (value) {
        return formInputRegex_1.passwordRegexFunc(value) ? null : "유효하지 않은 password형식";
    }
};
var loginValidation = {
    email: function (value) {
        return formInputRegex_1.emailRegexFunc(value) ? null : "유효하지 않은 email형식";
    },
    password: function (value) {
        return formInputRegex_1.passwordRegexFunc(value) ? null : "유효하지 않은 password형식";
    }
};
function useCustomForm(type) {
    var form = form_1.useForm({
        mode: "uncontrolled",
        initialValues: type === "register" ? registerInitialValue : loginInitialValue,
        validate: type === "register" ? registerValidation : loginValidation
    });
    return form;
}
exports["default"] = useCustomForm;
