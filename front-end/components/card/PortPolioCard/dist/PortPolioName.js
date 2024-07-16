"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var react_1 = require("react");
var PortPolioName_module_scss_1 = require("./PortPolioName.module.scss");
var cx = bind_1["default"].bind(PortPolioName_module_scss_1["default"]);
function PortPolioName(_a) {
    var usersTableId = _a.usersTableId, portpolioId = _a.portpolioId, portpolioName = _a.portpolioName, isResumeNameEdit = _a.isResumeNameEdit, setIsResumeNameEdit = _a.setIsResumeNameEdit;
    var ref = react_1.useRef(null);
    var dispatch = hooks_1.useAppDispatch();
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    var _b = react_1.useState(portpolioName), newPortPolioName = _b[0], setNewPortPolioName = _b[1];
    var handleChangeName = function (event) {
        setNewPortPolioName(event === null || event === void 0 ? void 0 : event.target.value);
    };
    var activeEnter = function (e) {
        if (e.key === "Enter") {
            dispatch({
                type: "UPDATE_PORT_POLIO_NAME_REQUEST",
                users_table_id: usersTableId,
                portpolio_id: portpolioId,
                portpolio_name: newPortPolioName
            });
        }
    };
    // TODO useFocusHookm만들어서 대체하기
    react_1.useEffect(function () {
        if (ref.current && isResumeNameEdit) {
            ref.current.focus();
        }
    }, [ref.current]);
    react_1.useEffect(function () {
        if (useStatusSelector.updatePortPolioNameStatus === 200) {
            setIsResumeNameEdit(false);
        }
    }, [useStatusSelector.updatePortPolioNameStatus]);
    return (React.createElement("input", { ref: ref, className: cx("container"), onChange: handleChangeName, value: newPortPolioName, onKeyDown: function (e) { return activeEnter(e); } }));
}
exports["default"] = PortPolioName;
