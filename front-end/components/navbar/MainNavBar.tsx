"use client";

import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MainNavBar.module.scss";

import MultiLanguage from "@/components/language/MultiLanguage";
import SearchIcon from "@/public/icons/SearchIcon";
import dynamic from "next/dynamic";

const cx = classNames.bind(styles);

type MainNavBarProps = {
  edit?: boolean;
};

const LOGINPROFILE = dynamic(
  () => import("@/components/profile/LoginProfile"),
  {
    ssr: false,
  }
);

function MainNavBar({ edit = false }: MainNavBarProps) {
  const { isLogin, userData } = useAppSelector(selectAuth);

  return (
    <div className={cx("container")}>
      <div className={cx("navigation_container", { hidden: edit })}>
        <nav className={cx("navigation")}>
          <ul className={cx("first_navigation_section")}>
            <Link className={cx("link")} href="/">
              Home
            </Link>
            <Link className={cx("link")} href="/board">
              People&apos;s portfolio
            </Link>
            <Link className={cx("link")} href="/myportpolio">
              My portfolio
            </Link>
          </ul>

          <div className={cx("second_navigation_section")}>
            <SearchIcon style={{ width: "20px" }} />
            <LOGINPROFILE isLogin={isLogin} userData={userData} />
            <MultiLanguage />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MainNavBar;
