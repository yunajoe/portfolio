"use strict";
exports.__esModule = true;
var DeleteModalLayout_1 = require("@/components/modal/layout/DeleteModalLayout");
var DeleteModalButton_1 = require("@/components/button/DeleteModalButton");
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var react_redux_1 = require("react-redux");
function CareerFieldDeleteModal(_a) {
    var onClose = _a.onClose, index = _a.index, setDeleteId = _a.setDeleteId;
    var dispatch = react_redux_1.useDispatch();
    var handleDelete = function () {
        dispatch(portpolioSlice_1.careerFieldDelete({ index: index }));
        setDeleteId(null);
    };
    return (React.createElement(DeleteModalLayout_1["default"], null,
        React.createElement(DeleteModalButton_1["default"], { onClose: onClose, onConfirm: handleDelete })));
}
exports["default"] = CareerFieldDeleteModal;
