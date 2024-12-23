import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import BoardSideBar from "@/components/sidebar/BoardSideBar";

import { GetUserResponse } from "@/schemas/user";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./BoardSideNavBar.module.scss";
const cx = classNames.bind(styles);
type BoardSideNavBarProps = {
  userData: GetUserResponse;
  mergedRefs: [
    { homeRef: RefObject<HTMLElement> | null },
    { aboutMeRef: RefObject<HTMLElement> | null },
    { portFolioRef: RefObject<HTMLElement> | null },
    { resumeRef: RefObject<HTMLElement> | null },
    { contactRef: RefObject<HTMLElement> | null }
  ];
};
function BoardSideNavBar({ userData, mergedRefs }: BoardSideNavBarProps) {
  return (
    <>
      <div className={cx("slide_menu_container")}>
        <div className={cx("slide_menu")}>
          <div className={cx("user_info")}>
            <div className={cx("image_box")}>
              <ConditionCusTomAvatar
                userData={userData}
                size="200px"
                width={230}
                height={230}
              />
            </div>
          </div>
          <div className={cx("menu_name")}>
            <BoardSideBar mergedRefs={mergedRefs} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardSideNavBar;
