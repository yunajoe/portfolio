import SideBarMenuItem from "@/components/item/board/SideBarMenuItem";
import HomeIcon from "@/public/icons/HomeIcon";
import UserIcon from "@/public/icons/UserIcon";
import WorkIcon from "@/public/icons/WorkIcon";
import { getTargetRef } from "@/utils/preprocessing";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./BoardSideBar.module.scss";
const cx = classNames.bind(styles);
type BoardSideBarProps = {
  mergedRefs: any;
};
function BoardSideBar({ mergedRefs }: BoardSideBarProps) {
  const { homeRef, aboutMeRef, portFolioRef } = getTargetRef(mergedRefs);
  const [navigateRef, setNavigateRef] = useState(null);
  const handleClick = (itemName: string) => {
    console.log("클릭됬었어유", itemName);
    if ("HOME" === itemName) {
      setNavigateRef(homeRef);
    } else if ("ABOUT ME" === itemName) {
      setNavigateRef(aboutMeRef);
    } else if ("PORTFOLIO" === itemName) {
      setNavigateRef(portFolioRef);
    }
    // setSelectedMenu(itemName);
  };

  useEffect(() => {
    if (!navigateRef) return;
    navigateRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [navigateRef]);

  return (
    <ul>
      <SideBarMenuItem
        icon={<HomeIcon />}
        itemName="HOME"
        handleClick={handleClick}
      />
      <SideBarMenuItem
        icon={<UserIcon />}
        itemName="ABOUT ME"
        handleClick={handleClick}
      />
      <SideBarMenuItem
        icon={<WorkIcon />}
        itemName="PORTFOLIO"
        handleClick={handleClick}
      />
      {/* <SideBarMenuItem icon={<ResumeIcon />} itemName="RESUME" />
      <SideBarMenuItem icon={<ContactIcon />} itemName="CONTACT ME" /> */}
    </ul>
  );
}

export default BoardSideBar;
