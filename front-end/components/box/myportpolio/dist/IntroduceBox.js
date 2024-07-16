"use strict";
exports.__esModule = true;
var portpolioSlice_1 = require("@/src/app/lib/features/portpolio/portpolioSlice");
var hooks_1 = require("@/src/app/lib/hooks");
var bind_1 = require("classnames/bind");
var IntroduceBox_module_scss_1 = require("./IntroduceBox.module.scss");
var cx = bind_1["default"].bind(IntroduceBox_module_scss_1["default"]);
function IntroduceBox(_a) {
    var introText = _a.introText;
    var dispatch = hooks_1.useAppDispatch();
    var handleIntroValue = function (event) {
        dispatch(portpolioSlice_1.introTextEdit(event.target.value));
    };
    return (React.createElement("textarea", { placeholder: "\uC790\uAE30\uC18C\uAC1C\uB97C \uD574\uC8FC\uC138\uC694", className: cx("textarea"), value: introText, onChange: handleIntroValue }));
}
exports["default"] = IntroduceBox;
