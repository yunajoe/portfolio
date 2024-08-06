"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var react_1 = require("react");
var AutoTypeWriter_module_scss_1 = require("./AutoTypeWriter.module.scss");
var cx = bind_1["default"].bind(AutoTypeWriter_module_scss_1["default"]);
function AutoTypeWriter(_a) {
    var userData = _a.userData;
    var _b = react_1.useState(""), currentText = _b[0], setCurrentText = _b[1];
    var _c = react_1.useState(0), currentIndex = _c[0], setCurrentIndex = _c[1];
    var _d = react_1.useState(false), oneLoop = _d[0], setLoop = _d[1];
    var emailText = userData.email;
    react_1.useEffect(function () {
        var timeout;
        if (emailText === currentText) {
            setLoop(true);
        }
        if (currentIndex === 0) {
            setLoop(false);
        }
        if (currentIndex < emailText.length && !oneLoop) {
            timeout = setTimeout(function () {
                setCurrentIndex(function (prev) { return prev + 1; });
                setCurrentText(function (prev) { return prev + emailText[currentIndex]; });
            }, 500);
        }
        if (currentIndex > 0 && currentIndex <= emailText.length && oneLoop) {
            timeout = setTimeout(function () {
                setCurrentIndex(function (prev) { return prev - 1; });
                var reducedText = currentText.slice(0, currentIndex - 1);
                setCurrentText(reducedText);
            }, 500);
        }
    }, [emailText, currentIndex, currentText, oneLoop]);
    return (React.createElement("div", null,
        React.createElement("span", { className: cx("user_email_text") }, currentText)));
}
exports["default"] = AutoTypeWriter;
