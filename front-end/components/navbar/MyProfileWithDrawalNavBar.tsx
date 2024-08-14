"use client";
import useLogOut from "@/hooks/useLogOut";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MyProfileWithDrawalNavBar.module.scss";
const cx = classNames.bind(styles);

function MyProfileWithDrawalNavBar() {
  const handleLogout = useLogOut();

  return (
    <header>
      <div className={cx("container")}>
        <Link href="/myprofile/setting" className={cx("link")}>
          설정페이지로가기
        </Link>
        <UnstyledButton className={cx("button")} onClick={handleLogout}>
          로그아웃
        </UnstyledButton>
      </div>
    </header>
  );
}

export default MyProfileWithDrawalNavBar;
