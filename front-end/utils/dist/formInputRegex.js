"use strict";
exports.__esModule = true;
exports.passwordRegexFunc = exports.emailRegexFunc = exports.usernameRegexFunc = void 0;
var usernameRegex = /^.{3,}$/;
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var excludeKorean = /^[^가-힣ㄱ-ㅎㅏ-ㅣ]*$/;
var atLeastAlphabet = /^(?=.*[a-zA-Z]).+$/;
var atLeastNumber = /^(?=.*\d).+$/;
var atLeastSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
exports.usernameRegexFunc = function (value) {
    if (value) {
        var trimmedValue = value.trim();
        return usernameRegex.test(trimmedValue);
    }
};
exports.emailRegexFunc = function (value) {
    var trimmedValue = value.trim();
    return emailRegex.test(trimmedValue);
};
exports.passwordRegexFunc = function (value) {
    var trimmedValue = value.trim();
    if (excludeKorean.test(trimmedValue) && trimmedValue.length > 5) {
        if (atLeastAlphabet.test(trimmedValue) &&
            atLeastNumber.test(trimmedValue)) {
            return true;
        }
        if (atLeastAlphabet.test(trimmedValue) &&
            atLeastSpecial.test(trimmedValue)) {
            return true;
        }
        if (atLeastNumber.test(trimmedValue) && atLeastSpecial.test(trimmedValue)) {
            return true;
        }
    }
    return false;
};
