import MainNavBar from "@/components/navbar/MainNavBar";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);
type MyProfileLayoutProps = {
  children: React.ReactNode;
};

export default async function MyProfileLayout({
  children,
}: MyProfileLayoutProps) {
  return (
    <div className={cx("container")}>
      <MainNavBar />
      {children}
    </div>
  );
}
