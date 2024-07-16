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
var portpolioResultSlice_1 = require("@/src/app/lib/features/portpolio/portpolioResultSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var cookies_next_1 = require("cookies-next");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var CreatePortPolioCard_module_scss_1 = require("./CreatePortPolioCard.module.scss");
var cx = bind_1["default"].bind(CreatePortPolioCard_module_scss_1["default"]);
function CreatePortPolioCard() {
    var _this = this;
    var dispatch = hooks_1.useAppDispatch();
    var usePortPolioResultSelector = hooks_1.useAppSelector(portpolioResultSlice_1.selectPortPolioResult);
    var current_portpolio_id = usePortPolioResultSelector.current_portpolio_id;
    var _a = react_1.useState(false), isCreateButtonClick = _a[0], setIsCreateButtonClick = _a[1];
    var router = navigation_1.useRouter();
    var handleCreatePortPoilo = function () { return __awaiter(_this, void 0, void 0, function () {
        var accessToken;
        return __generator(this, function (_a) {
            setIsCreateButtonClick(true);
            accessToken = cookies_next_1.getCookie("accessToken");
            dispatch({
                type: "CREATE_PORT_POLIO_REQUEST",
                accessToken: accessToken
            });
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        if (current_portpolio_id !== null && isCreateButtonClick) {
            router.push("/myportpolio/edit/" + current_portpolio_id);
        }
        setIsCreateButtonClick(false);
    }, [current_portpolio_id]);
    return (React.createElement(React.Fragment, null,
        React.createElement(core_1.Card, { onClick: handleCreatePortPoilo, h: "200px", shadow: "sm", p: "50px", style: { border: "1px solid #dbdbdb" } },
            React.createElement(core_1.UnstyledButton, { fw: 800, ta: "center", style: { cursor: "pointer" } }, "create new portpolio"))));
}
exports["default"] = CreatePortPolioCard;
