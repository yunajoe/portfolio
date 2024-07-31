"use client";

import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import SearchIcon from "@/public/icons/SearchIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MainNavBar.module.scss";
const cx = classNames.bind(styles);

type MainNavBarProps = {
  edit?: boolean;
};

function MainNavBar({ edit = false }: MainNavBarProps) {
  const { isLogin, userData } = useAppSelector(selectAuth);

  const changeMenu = (
    <>
      {isLogin ? (
        <Link href="/myprofile" style={{ textDecoration: "none" }}>
          <ConditionCusTomAvatar userData={userData} width={30} height={30} />
        </Link>
      ) : (
        <Link
          href="/auth/login"
          style={{ textDecoration: "none", color: "black" }}
        >
          <UnstyledButton>회원가입/로그인</UnstyledButton>
        </Link>
      )}
    </>
  );

  return (
    <div className={cx("container")}>
      <div className={cx("navigation_container", { hidden: edit })}>
        <nav className={cx("navigation")}>
          <ul className={cx("first_navigation_section")}>
            <Link className={cx("link")} href="/board">
              People&apos;s Portpolio
            </Link>
            <Link className={cx("link")} href="/myportpolio">
              My Portpolio
            </Link>
            <li>test3</li>
          </ul>
          <ul className={cx("second_navigation_section")}>
            <SearchIcon style={{ width: "20px" }} />
            <li>{changeMenu}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainNavBar;
