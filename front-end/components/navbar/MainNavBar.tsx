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
        <Link href="/auth/login" style={{ textDecoration: "none" }}>
          <UnstyledButton style={{ border: "5px solid red" }}>
            회원가입/로그인
          </UnstyledButton>
        </Link>
      )}
    </>
  );

  return (
    <div className={cx("container")}>
      <div className={cx("navigation_container", { hidden: edit })}>
        <nav className={cx("navigation")}>
          <ul className={cx("first_navigation_section")}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
          <ul className={cx("second_navigation_section")}>
            <li>
              <SearchIcon style={{ width: "20px" }} />
            </li>
            <li>{changeMenu}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainNavBar;
