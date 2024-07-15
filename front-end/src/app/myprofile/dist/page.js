"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var layout_module_scss_1 = require("./layout.module.scss");
var cx = bind_1["default"].bind(layout_module_scss_1["default"]);
function Page() {
    return (React.createElement("div", { className: cx("grid_container") },
        React.createElement("div", { className: cx("menu_container") },
            React.createElement("ul", { className: cx("menu_list") },
                React.createElement("li", null,
                    React.createElement("span", { className: cx("text") }, "\uB0B4 \uD504\uB85C\uD544")),
                React.createElement("div", { className: cx("divider") }),
                React.createElement("li", null,
                    React.createElement("span", { className: cx("text") }, "\uB85C\uADF8\uC544\uC6C3")))),
        React.createElement("div", { className: cx("divider") }),
        React.createElement("div", { className: cx("myprofile_container") },
            React.createElement("div", null,
                React.createElement("div", null, "user\uACC4\uC815\uC758 \uC774\uBBF8\uC9C0"),
                React.createElement("span", null, "\uD604\uC7AC user\uC758 \uACC4\uC815\uC758 \uB2C9\uB124\uC784")),
            React.createElement("div", null, "\uD559\uB825\uCD94\uAC00"),
            React.createElement("div", null, "\uACBD\uB825\uCD94\uAC00"))));
}
exports["default"] = Page;
