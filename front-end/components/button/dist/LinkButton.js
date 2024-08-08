"use strict";
exports.__esModule = true;
var core_1 = require("@mantine/core");
var link_1 = require("next/link");
function LinkButton(_a) {
    var name = _a.name;
    return (React.createElement(link_1["default"], { href: "/auth/login", style: { textDecoration: "none", color: "black" } },
        React.createElement(core_1.UnstyledButton, null, name)));
}
exports["default"] = LinkButton;
