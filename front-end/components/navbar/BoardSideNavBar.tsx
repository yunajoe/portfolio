import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import BoardSideBar from "@/components/sidebar/BoardSideBar";
import { User } from "@/types/api";
import classNames from "classnames/bind";
import styles from "./BoardSideNavBar.module.scss";
const cx = classNames.bind(styles);
type BoardSideNavBarProps = {
  userData: User;
};

function BoardSideNavBar({ userData }: BoardSideNavBarProps) {
  return (
    <div className={cx("slide_menu_container")}>
      <div className={cx("slide_menu")}>
        <div className={cx("user_info")}>
          <div className={cx("image_box")}>
            <ConditionCusTomAvatar
              userData={userData}
              width={250}
              height={160}
            />
          </div>
        </div>
        <div className={cx("menu_name")}>
          <BoardSideBar />
        </div>
      </div>
    </div>
  );
}

export default BoardSideNavBar;
