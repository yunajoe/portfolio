"use client";
"use strict";
exports.__esModule = true;
var CreatePortPolioCard_1 = require("@/components/card/PortPolioCard/CreatePortPolioCard");
var PortPolioCard_1 = require("@/components/card/PortPolioCard/PortPolioCard");
var EditAndDeleteDropDown_1 = require("@/components/dropdown/EditAndDeleteDropDown");
var ModalPortal_1 = require("@/components/modal/ModalPortal");
var PortPolioDeleteModal_1 = require("@/components/modal/type/PortPolioDeleteModal");
var useModal_1 = require("@/hooks/useModal");
var useToast_1 = require("@/hooks/useToast");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var portpolioResultSlice_1 = require("@/src/app/lib/features/portpolio/portpolioResultSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var bind_1 = require("classnames/bind");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var MyPortPolioContents_module_scss_1 = require("./MyPortPolioContents.module.scss");
var cx = bind_1["default"].bind(MyPortPolioContents_module_scss_1["default"]);
function MyPortPolioContents() {
    var _a = react_1.useState(false), isEditAndDeleteDropDown = _a[0], setIsEditAndDeleteDropDown = _a[1];
    var _b = react_1.useState(""), deleteDropDownId = _b[0], setDeleteDropDownId = _b[1];
    var _c = react_1.useState(false), isResumeNameEdit = _c[0], setIsResumeNameEdit = _c[1];
    var useSelectAuth = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var usePortPolioResultSelector = hooks_1.useAppSelector(portpolioResultSlice_1.selectPortPolioResult);
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    var _d = useModal_1["default"](), isDeleteModalOpen = _d.isDeleteModalOpen, setIsDeleteModalOpen = _d.setIsDeleteModalOpen;
    var userData = useSelectAuth.userData;
    var savePortPolioStatus = useStatusSelector.savePortPolioStatus, deletePortPolioStatus = useStatusSelector.deletePortPolioStatus, updatePortPolioNameStatus = useStatusSelector.updatePortPolioNameStatus, updatePortPolioNameMessage = useStatusSelector.updatePortPolioNameMessage;
    var portpolio_detail_arr = usePortPolioResultSelector.portpolio_detail_arr;
    var dispatch = hooks_1.useAppDispatch();
    var router = navigation_1.useRouter();
    var handleDeleteModalOpen = function () {
        setIsDeleteModalOpen(true);
    };
    var handleDeleteModalClose = function () {
        setIsDeleteModalOpen(false);
    };
    // 이력서 이름 변경 펑션
    var handleChangeResumeName = function () {
        setIsResumeNameEdit(true);
        setIsEditAndDeleteDropDown(false);
    };
    // 이력서 삭제 펑션
    var handleDeleteResume = function () {
        handleDeleteModalOpen();
        setIsEditAndDeleteDropDown(false);
    };
    react_1.useEffect(function () {
        if (userData._id) {
            dispatch({
                type: "GET_PORT_POLIO_DETAIL_LIST_REQUEST",
                users_table_id: userData._id
            });
        }
        return function () {
            dispatch(statusSlice_1.deletePortPolioStatusReset());
        };
    }, [
        userData._id,
        updatePortPolioNameStatus,
        deletePortPolioStatus,
        savePortPolioStatus,
    ]);
    var navigateToDetailPage = function (data) {
        if (deleteDropDownId !== "")
            return;
        router.push("/myportpolio/edit/" + data.portpolioId);
    };
    useToast_1["default"]("portpolio_name", updatePortPolioNameStatus, updatePortPolioNameMessage);
    return (React.createElement("div", { className: cx("grid_container") },
        React.createElement(CreatePortPolioCard_1["default"], null),
        portpolio_detail_arr.map(function (data, index) {
            return (React.createElement("div", { onClick: function () { return navigateToDetailPage(data); }, key: index, role: "button", className: cx("card_container") },
                React.createElement(PortPolioCard_1["default"], { data: data, deleteDropDownId: deleteDropDownId, setDeleteDropDownId: setDeleteDropDownId, isResumeNameEdit: isResumeNameEdit, setIsResumeNameEdit: setIsResumeNameEdit, setIsEditAndDeleteDropDown: setIsEditAndDeleteDropDown }),
                isEditAndDeleteDropDown && data._id === deleteDropDownId && (React.createElement(EditAndDeleteDropDown_1["default"], { setDeleteDropDownId: setDeleteDropDownId, handleChangeResumeName: handleChangeResumeName, handleDeleteResume: handleDeleteResume })),
                isDeleteModalOpen && data._id === deleteDropDownId && (React.createElement(ModalPortal_1["default"], null,
                    React.createElement(PortPolioDeleteModal_1["default"], { onClose: handleDeleteModalClose, users_table_id: data.users_table_id, portpolio_id: data.portpolioId, setDeleteDropDownId: setDeleteDropDownId })))));
        })));
}
exports["default"] = MyPortPolioContents;
