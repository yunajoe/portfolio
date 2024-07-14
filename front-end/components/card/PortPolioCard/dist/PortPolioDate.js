"use strict";
exports.__esModule = true;
var date_1 = require("@/utils/date");
var core_1 = require("@mantine/core");
function PortPolioDate(_a) {
    var updatedAt = _a.updatedAt;
    var _b = date_1.changeTimeFormat(updatedAt), year = _b.year, month = _b.month, day = _b.day;
    return (React.createElement(core_1.Text, null,
        year,
        ".",
        month,
        ".",
        day));
}
exports["default"] = PortPolioDate;
