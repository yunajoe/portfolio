"use client";
"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var BoardContents_module_scss_1 = require("./BoardContents.module.scss");
var cx = bind_1["default"].bind(BoardContents_module_scss_1["default"]);
function BoardContents(_a) {
    var data = _a.data;
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        router.refresh();
    }, []);
    var handleClick = function (portpolioId) {
        router.push("/board/" + portpolioId);
    };
    return (React.createElement("div", { className: cx("container") }, data.map(function (item) {
        return (React.createElement("div", { role: "button", className: cx("item"), key: item._id, onClick: function () { return handleClick(item.portpolioId); } }, item.portpolio_name));
    })));
}
exports["default"] = BoardContents;
