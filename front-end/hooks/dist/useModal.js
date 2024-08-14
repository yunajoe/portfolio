"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useModal() {
    var _a = react_1.useState(false), isSearchModalOpen = _a[0], setIsSearchModalOpen = _a[1];
    var _b = react_1.useState(false), isDeleteModalOpen = _b[0], setIsDeleteModalOpen = _b[1];
    return {
        isSearchModalOpen: isSearchModalOpen,
        setIsSearchModalOpen: setIsSearchModalOpen,
        isDeleteModalOpen: isDeleteModalOpen,
        setIsDeleteModalOpen: setIsDeleteModalOpen
    };
}
exports["default"] = useModal;
