"use strict";
exports.__esModule = true;
var DeleteModalLayout_1 = require("@/components/modal/layout/DeleteModalLayout");
var useDispatchParam_1 = require("@/hooks/useDispatchParam");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var DeleteModal_module_css_1 = require("./DeleteModal.module.css");
var cx = bind_1["default"].bind(DeleteModal_module_css_1["default"]);
function DeleteModal(_a) {
    var name = _a.name, handleDeleteModalClose = _a.handleDeleteModalClose, index = _a.index, users_table_id = _a.users_table_id, portpolio_id = _a.portpolio_id;
    var dispatchAction = useDispatchParam_1["default"](name, users_table_id, portpolio_id);
    var handleDelete = function () {
        dispatchAction(index);
    };
    var content = (React.createElement(core_1.Stack, null,
        React.createElement(core_1.Text, { ta: "center", fz: "md" }, "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
        React.createElement(core_1.Divider, null),
        React.createElement(core_1.Flex, { gap: "sm" },
            React.createElement(core_1.UnstyledButton, { className: cx("close_button"), ta: "center", onClick: handleDeleteModalClose }, "\uB2EB\uAE30"),
            React.createElement(core_1.UnstyledButton, { className: cx("confirm_button"), ta: "center", onClick: handleDelete }, "\uD655\uC778"))));
    return React.createElement(DeleteModalLayout_1["default"], null);
}
exports["default"] = DeleteModal;
