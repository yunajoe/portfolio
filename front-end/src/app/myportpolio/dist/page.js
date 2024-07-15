"use client";
"use strict";
exports.__esModule = true;
var CreatePortPolioCard_1 = require("@/components/card/CreatePortPolioCard");
var PortPolioDate_1 = require("@/components/card/PortPolioCard/PortPolioDate");
var PortPolioName_1 = require("@/components/card/PortPolioCard/PortPolioName");
var Divider_1 = require("@/components/divider/Divider");
var EditAndDeleteDropDown_1 = require("@/components/dropdown/EditAndDeleteDropDown");
var ModalPortal_1 = require("@/components/modal/ModalPortal");
var PortPolioDeleteModal_1 = require("@/components/modal/type/PortPolioDeleteModal");
var useModal_1 = require("@/hooks/useModal");
var HamburgerIcon_1 = require("@/public/icons/HamburgerIcon");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var portpolioResultSlice_1 = require("@/src/app/lib/features/portpolio/portpolioResultSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var cookies_next_1 = require("cookies-next");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function Page() {
    var _a = react_1.useState(false), isEditAndDeleteDropDown = _a[0], setIsEditAndDeleteDropDown = _a[1];
    var _b = react_1.useState(""), deleteDropDownId = _b[0], setDeleteDropDownId = _b[1];
    var _c = react_1.useState(false), isResumeNameEdit = _c[0], setIsResumeNameEdit = _c[1];
    var useSelectAuth = hooks_1.useAppSelector(authSlice_1.selectAuth);
    var usePortPolioResultSelector = hooks_1.useAppSelector(portpolioResultSlice_1.selectPortPolioResult);
    var useStatusSelector = hooks_1.useAppSelector(statusSlice_1.selectStatus);
    // 모달
    var _d = useModal_1["default"](), isDeleteModalOpen = _d.isDeleteModalOpen, handleDeleteModalOpen = _d.handleDeleteModalOpen, handleDeleteModalClose = _d.handleDeleteModalClose;
    var isLogin = useSelectAuth.isLogin, message = useSelectAuth.message, status = useSelectAuth.status, userData = useSelectAuth.userData;
    var savePortPolioStatus = useStatusSelector.savePortPolioStatus, deletePortPolioStatus = useStatusSelector.deletePortPolioStatus, updatePortPolioNameStatus = useStatusSelector.updatePortPolioNameStatus;
    var portpolio_detail_arr = usePortPolioResultSelector.portpolio_detail_arr;
    var accessToken = cookies_next_1.getCookie("accessToken");
    var refreshToken = cookies_next_1.getCookie("refreshToken");
    var dispatch = hooks_1.useAppDispatch();
    var router = navigation_1.useRouter();
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
    }, [
        userData._id,
        updatePortPolioNameStatus,
        deletePortPolioStatus,
        savePortPolioStatus,
    ]);
    react_1.useEffect(function () {
        if (useStatusSelector.updatePortPolioNameStatus === 200) {
            dispatch(statusSlice_1.updatePortPolioNameStatusReset());
        }
    }, [useStatusSelector.updatePortPolioNameStatus]);
    var navigateToDetailPage = function (data) {
        if (deleteDropDownId !== "")
            return;
        router.push("/myportpolio/edit/" + data.portpolioId);
    };
    return (React.createElement("div", { className: cx("grid_container") },
        React.createElement(CreatePortPolioCard_1["default"], null),
        portpolio_detail_arr.map(function (data, index) {
            return (React.createElement(core_1.UnstyledButton, { onClick: function () { return navigateToDetailPage(data); }, key: index, bg: "blue", h: "200px", style: {
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 5,
                    border: "1px solid #dbdbdb"
                } },
                React.createElement(core_1.Text, { style: { marginBottom: "5px" } }, data.defaultResume && React.createElement(core_1.Pill, { radius: 5 }, "\uAE30\uBCF8\uC774\uB825\uC11C")),
                isResumeNameEdit && data._id === deleteDropDownId ? (React.createElement(PortPolioName_1["default"], { usersTableId: data.users_table_id, portpolioId: data.portpolioId, portpolioName: data.portpolio_name, isResumeNameEdit: isResumeNameEdit, setIsResumeNameEdit: setIsResumeNameEdit })) : (React.createElement(core_1.Text, null, data.portpolio_name)),
                React.createElement(PortPolioDate_1["default"], { updatedAt: data.updatedAt }),
                React.createElement(Divider_1["default"], { color: "white", customStyles: {
                        position: "absolute",
                        width: "100%",
                        bottom: "25px"
                    } }),
                React.createElement(core_1.Flex, { justify: "flex-end", align: "center", style: {
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }, onClick: function (e) {
                        e.stopPropagation();
                        setDeleteDropDownId(data._id);
                        setIsEditAndDeleteDropDown(true);
                    } },
                    React.createElement(HamburgerIcon_1["default"], { style: { width: "30px" } })),
                isEditAndDeleteDropDown && data._id === deleteDropDownId && (React.createElement(EditAndDeleteDropDown_1["default"], { setDeleteDropDownId: setDeleteDropDownId, handleChangeResumeName: handleChangeResumeName, handleDeleteResume: handleDeleteResume })),
                isDeleteModalOpen && data._id === deleteDropDownId && (React.createElement(ModalPortal_1["default"], null,
                    React.createElement(PortPolioDeleteModal_1["default"], { onClose: handleDeleteModalClose, users_table_id: data.users_table_id, portpolio_id: data.portpolioId, setDeleteDropDownId: setDeleteDropDownId })))));
        })));
}
exports["default"] = Page;
