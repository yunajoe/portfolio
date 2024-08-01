import SideBarMenuItem from "@/components/item/board/SideBarMenuItem";
import ContactIcon from "@/public/icons/ContactIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import ResumeIcon from "@/public/icons/ResumeIcon";
import UserIcon from "@/public/icons/UserIcon";
import WorkIcon from "@/public/icons/WorkIcon";
import classNames from "classnames/bind";
import styles from "./BoardSideBar.module.scss";
const cx = classNames.bind(styles);

function BoardSideBar() {
  return (
    <ul>
      <SideBarMenuItem icon={<HomeIcon />} itemName="HOME" />
      <SideBarMenuItem icon={<UserIcon />} itemName="ABOUT ME" />
      <SideBarMenuItem icon={<WorkIcon />} itemName="PORTFOLIO" />
      <SideBarMenuItem icon={<ResumeIcon />} itemName="RESUME" />
      <SideBarMenuItem icon={<ContactIcon />} itemName="CONTACT ME" />
    </ul>
  );
}

export default BoardSideBar;
