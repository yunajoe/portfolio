"use client";
import Divider from "@/components/divider/Divider";
import useLogOut from "@/hooks/useLogOut";
import classNames from "classnames/bind";
import styles from "./MyProfileBoxTwo.module.scss";
const cx = classNames.bind(styles);

type MyProfileBoxTwoProps = {
  show?: boolean;
};

function MyProfileBoxTwo({ show = true }: MyProfileBoxTwoProps) {
  const handleLogout = useLogOut();

  return (
    <ul className={cx("menu_list", { remove: !show })}>
      <li>
        <span className={cx("text")}>내 프로필</span>
      </li>
      <div className={cx("menu_list_divider")}>
        <Divider />
      </div>
      <li onClick={handleLogout}>
        <span className={cx("text")}>로그아웃</span>
      </li>
    </ul>
  );
}

export default MyProfileBoxTwo;
