"use client";

import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MainNavBar.module.scss";
const cx = classNames.bind(styles);

function MainNavBar() {
  const { isLogin, userData } = useAppSelector(selectAuth);

  const changeMenu = (
    <>
      {isLogin ? (
        <Link href="/myprofile" style={{ textDecoration: "none" }}>
          <CusTomAvatar userData={userData} />
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
      <div className={cx("navigation_container")}>
        <nav className={cx("navigation")}>
          <ul className={cx("menubar_list")}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
          <aside>
            <ul className={cx("menubar_list")}>
              <li>test4</li>
              <li>{changeMenu}</li>
            </ul>
          </aside>
        </nav>
      </div>
    </div>
  );
}

export default MainNavBar;
