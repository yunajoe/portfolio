"use strict";
exports.__esModule = true;
var bind_1 = require("classnames/bind");
var PortFolioSection_module_scss_1 = require("./PortFolioSection.module.scss");
var cx = bind_1["default"].bind(PortFolioSection_module_scss_1["default"]);
function PortFolioSection(_a) {
    var portFolioRef = _a.portFolioRef;
    return (React.createElement("section", { className: cx("section"), id: "PortPolio", ref: portFolioRef },
        React.createElement("div", { className: cx("aboutMe", "overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("intro_section", "display_table", "user_container") },
                    React.createElement("div", { className: cx("display_table_cell") },
                        React.createElement("h3", null, "HI, IAM"),
                        React.createElement("h1", null, "YUNA\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147"),
                        React.createElement("h3", { className: cx("description") },
                            React.createElement("span", null, "WEB DEVELOPER"),
                            React.createElement("span", null, "Typed_cursor"))))))));
}
exports["default"] = PortFolioSection;
