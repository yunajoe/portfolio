"use client";

import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MainNavBar.module.scss";

import { t } from "@/components/language";
import MultiLanguage from "@/components/language/MultiLanguage";
import { TransLationContext } from "@/context/TransLationContext";
import useClient from "@/hooks/useClient";
import SearchIcon from "@/public/icons/SearchIcon";
import dynamic from "next/dynamic";
import { useContext } from "react";

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
  const { language, setLanguage } = useContext(TransLationContext);
  const isClient = useClient();

  return (
    <div className={cx("container")}>
      <div className={cx("navigation_container", { hidden: edit })}>
        <nav className={cx("navigation")}>
          <ul className={cx("first_navigation_section")}>
            <Link className={cx("link")} href="/">
              {isClient ? t("main_navigation.menu_one", language) : null}
            </Link>
            <Link className={cx("link")} href="/board">
              {isClient ? t("main_navigation.menu_two", language) : null}
            </Link>
            <Link className={cx("link")} href="/myportpolio">
              {isClient ? t("main_navigation.menu_three", language) : null}
            </Link>
            <Link className={cx("link")} href="/jobs">
              {isClient ? t("main_navigation.menu_four", language) : null}
            </Link>
          </ul>

          <div className={cx("second_navigation_section")}>
            <SearchIcon style={{ width: "20px" }} />
            <LOGINPROFILE isLogin={isLogin} userData={userData} />
          </div>
        </nav>
      </div>
      <div className={cx("multi_language")}>
        <MultiLanguage />
      </div>
    </div>
  );
}

export default MainNavBar;
