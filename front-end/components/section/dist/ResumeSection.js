"use strict";
exports.__esModule = true;
var SectionHead_1 = require("@/components/section/SectionHead");
var ResumeIcon_1 = require("@/public/icons/ResumeIcon");
var core_1 = require("@mantine/core");
var bind_1 = require("classnames/bind");
var ResumeSection_module_scss_1 = require("./ResumeSection.module.scss");
var cx = bind_1["default"].bind(ResumeSection_module_scss_1["default"]);
function ResumeSection(_a) {
    var portpolioData = _a.portpolioData, resumeRef = _a.resumeRef;
    var careerList = portpolioData.careerList, educationList = portpolioData.educationList;
    return (React.createElement("section", { className: cx("section"), id: "home", ref: resumeRef },
        React.createElement("div", { className: cx("overlay_container") },
            React.createElement("div", { className: cx("overlay") },
                React.createElement("div", { className: cx("contents") },
                    React.createElement(core_1.ScrollArea, { h: 1000 },
                        React.createElement("div", { className: cx("scroll_area") },
                            React.createElement(SectionHead_1["default"], { targetIcon: React.createElement(ResumeIcon_1["default"], { style: { width: "300px", height: "300px" } }), title: "RESUME" }),
                            React.createElement("div", { className: cx("education_and_work_container") },
                                React.createElement("div", { className: cx("education_container") }, careerList.map(function (item, index) {
                                    return (React.createElement("li", { key: index, className: cx("item") },
                                        React.createElement("div", null,
                                            React.createElement("span", null, item.companyDate.startYear),
                                            React.createElement("span", null, item.companyDate.startMonth),
                                            React.createElement("span", null, item.companyDate.endYear),
                                            React.createElement("span", null, item.companyDate.endMonth)),
                                        React.createElement("span", { className: cx("company_name") }, item.companyName),
                                        React.createElement("span", { className: cx("position") }, item.position)));
                                })),
                                React.createElement("div", { className: cx("work_container") }, educationList.map(function (item, index) {
                                    return (React.createElement("li", { key: index, className: cx("item") },
                                        React.createElement("div", null,
                                            React.createElement("span", null, item.schoolDate.startYear),
                                            React.createElement("span", null, item.schoolDate.startMonth),
                                            React.createElement("span", null, item.schoolDate.endYear),
                                            React.createElement("span", null, item.schoolDate.endMonth)),
                                        React.createElement("span", { className: cx("school_name") }, item.schoolName),
                                        React.createElement("span", { className: cx("major") }, item.major)));
                                }))))))))));
}
exports["default"] = ResumeSection;
