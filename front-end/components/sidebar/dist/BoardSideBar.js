"use strict";
exports.__esModule = true;
var SideBarMenuItem_1 = require("@/components/item/board/SideBarMenuItem");
var HomeIcon_1 = require("@/public/icons/HomeIcon");
var UserIcon_1 = require("@/public/icons/UserIcon");
var WorkIcon_1 = require("@/public/icons/WorkIcon");
var preprocessing_1 = require("@/utils/preprocessing");
var react_1 = require("react");
function BoardSideBar(_a) {
    var mergedRefs = _a.mergedRefs;
    var _b = preprocessing_1.getTargetRef(mergedRefs), homeRef = _b.homeRef, aboutMeRef = _b.aboutMeRef, portFolioRef = _b.portFolioRef;
    var _c = react_1.useState(null), navigateRef = _c[0], setNavigateRef = _c[1];
    var handleClick = function (itemName) {
        if ("HOME" === itemName) {
            setNavigateRef(homeRef);
        }
        else if ("ABOUT ME" === itemName) {
            setNavigateRef(aboutMeRef);
        }
        else if ("PORTFOLIO" === itemName) {
            setNavigateRef(portFolioRef);
        }
    };
    react_1.useEffect(function () {
        if (!navigateRef || !navigateRef.current)
            return;
        navigateRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }, [navigateRef]);
    return (React.createElement("ul", null,
        React.createElement(SideBarMenuItem_1["default"], { icon: React.createElement(HomeIcon_1["default"], null), itemName: "HOME", handleClick: handleClick }),
        React.createElement(SideBarMenuItem_1["default"], { icon: React.createElement(UserIcon_1["default"], null), itemName: "ABOUT ME", handleClick: handleClick }),
        React.createElement(SideBarMenuItem_1["default"], { icon: React.createElement(WorkIcon_1["default"], null), itemName: "PORTFOLIO", handleClick: handleClick })));
}
exports["default"] = BoardSideBar;
