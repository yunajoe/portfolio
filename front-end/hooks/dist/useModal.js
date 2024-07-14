"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useModal() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(false), isDeleteModalOpen = _b[0], setIsDeleteModalOpen = _b[1];
    var handleOpen = function () {
        setIsOpen(true);
    };
    var handleClose = function () {
        setIsOpen(false);
    };
    var handleDeleteModalOpen = function () {
        setIsDeleteModalOpen(true);
    };
    var handleDeleteModalClose = function () {
        setIsDeleteModalOpen(false);
    };
    return {
        isOpen: isOpen,
        handleOpen: handleOpen,
        handleClose: handleClose,
        isDeleteModalOpen: isDeleteModalOpen,
        handleDeleteModalOpen: handleDeleteModalOpen,
        handleDeleteModalClose: handleDeleteModalClose
    };
}
exports["default"] = useModal;
