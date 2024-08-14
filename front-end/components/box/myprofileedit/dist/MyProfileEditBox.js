"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var MyProfileEditBoxBody_1 = require("@/components/box/myprofileedit/MyProfileEditBoxBody");
var MyProfileEditBoxHeader_1 = require("@/components/box/myprofileedit/MyProfileEditBoxHeader");
var ModalPortal_1 = require("@/components/modal/ModalPortal");
var ImageUploadModal_1 = require("@/components/modal/type/ImageUploadModal");
var UserNickNameEditModal_1 = require("@/components/modal/type/UserNickNameEditModal");
var useToast_1 = require("@/hooks/useToast");
var authSlice_1 = require("@/src/app/lib/features/auth/authSlice");
var statusSlice_1 = require("@/src/app/lib/features/status/statusSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var react_1 = require("react");
function MyProfileEditBox() {
    var _this = this;
    var userData = hooks_1.useAppSelector(authSlice_1.selectAuth).userData;
    var _a = hooks_1.useAppSelector(statusSlice_1.selectStatus), updateUserNickNameStatus = _a.updateUserNickNameStatus, updateUserNickNameMessage = _a.updateUserNickNameMessage, updateProfileImageStatus = _a.updateProfileImageStatus, updateProfileImageMessage = _a.updateProfileImageMessage;
    var _b = react_1.useState(""), profileImageUrl = _b[0], setProfileImageUrl = _b[1];
    var _c = react_1.useState(false), profileUserNickNameButton = _c[0], setProfileUserNickNameButton = _c[1];
    var _d = react_1.useState(null), profileFormData = _d[0], setProfileFormData = _d[1];
    useToast_1["default"]("username", updateUserNickNameStatus, updateUserNickNameMessage);
    useToast_1["default"]("profile_image", updateProfileImageStatus, updateProfileImageMessage);
    var dispatch = hooks_1.useAppDispatch();
    var handleClose = function () {
        setProfileImageUrl("");
    };
    var handleImageUpload = function () { return __awaiter(_this, void 0, void 0, function () {
        var formData;
        return __generator(this, function (_a) {
            if (!profileFormData)
                return [2 /*return*/];
            formData = new FormData();
            formData.append("_id", userData._id);
            formData.append("file", profileFormData);
            dispatch({
                type: "UPDATE_USER_PROFILE_IMAGE",
                formData: formData
            });
            setProfileImageUrl("");
            return [2 /*return*/];
        });
    }); };
    var handleCloseUserNickName = function () {
        setProfileUserNickNameButton(false);
    };
    react_1.useEffect(function () {
        if (updateUserNickNameStatus === 200) {
            dispatch({
                type: "USER_FIND_BY_OBJECT_ID",
                _id: userData._id
            });
        }
    }, [updateUserNickNameStatus]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement(MyProfileEditBoxHeader_1["default"], null),
            React.createElement(MyProfileEditBoxBody_1["default"], { setProfileFormData: setProfileFormData, setProfileImageUrl: setProfileImageUrl, setProfileUserNickNameButton: setProfileUserNickNameButton })),
        profileImageUrl.length > 0 && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(ImageUploadModal_1["default"], { title: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0", profileImageUrl: profileImageUrl, close: handleClose, save: handleImageUpload }))),
        profileUserNickNameButton && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(UserNickNameEditModal_1["default"], { title: "\uC774\uB984", close: handleCloseUserNickName })))));
}
exports["default"] = MyProfileEditBox;
