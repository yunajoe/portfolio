"use strict";
exports.__esModule = true;
var DeleteModalButton_1 = require("@/components/button/DeleteModalButton");
var DeleteModalLayout_1 = require("@/components/modal/layout/DeleteModalLayout");
var react_redux_1 = require("react-redux");
function PortPolioDeleteModal(_a) {
    var onClose = _a.onClose, users_table_id = _a.users_table_id, portpolio_id = _a.portpolio_id, setDeleteDropDownId = _a.setDeleteDropDownId;
    var dispatch = react_redux_1.useDispatch();
    var handleDelete = function () {
        dispatch({
            type: "DELETE_PORT_POLIO_REQUEST",
            users_table_id: users_table_id,
            portpolio_id: portpolio_id
        });
        onClose();
        setDeleteDropDownId("");
    };
    var handleClose = function () {
        onClose();
        setDeleteDropDownId("");
    };
    return (React.createElement(DeleteModalLayout_1["default"], null,
        React.createElement(DeleteModalButton_1["default"], { onClose: handleClose, onConfirm: handleDelete })));
}
exports["default"] = PortPolioDeleteModal;
