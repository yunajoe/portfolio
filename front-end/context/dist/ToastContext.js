"use strict";
exports.__esModule = true;
exports.ToastProvider = exports.ToastContext = void 0;
var Toast_1 = require("@/components/toast/Toast");
var react_1 = require("react");
var Toast_module_css_1 = require("../components/toast/Toast.module.css");
var bind_1 = require("classnames/bind");
var cx = bind_1["default"].bind(Toast_module_css_1["default"]);
exports.ToastContext = react_1.createContext(null);
exports.ToastProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState({
        message: ""
    }), toasts = _c[0], setToasts = _c[1];
    var handleOpenToast = function (message) {
        setIsOpen(true);
        setToasts({
            message: message
        });
    };
    var handleCloseToast = function () {
        setIsOpen(false);
    };
    var conTextValue = react_1.useMemo(function () { return ({
        isOpen: isOpen,
        open: handleOpenToast,
        close: handleCloseToast
    }); }, []);
    return (React.createElement(exports.ToastContext.Provider, { value: conTextValue },
        children,
        React.createElement("div", { className: cx("toasts") }, isOpen && React.createElement(Toast_1["default"], { message: toasts.message, close: handleCloseToast }))));
};
