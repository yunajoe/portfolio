import MyProfileEditNavBar from "@/components/navbar/MyProfileEditNavBar";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);
type MyProfileEditLayoutProps = {
  children: React.ReactNode;
};

export default async function MyProfileEditLayout({
  children,
}: MyProfileEditLayoutProps) {
  return (
    <div className={cx("container")}>
      <MyProfileEditNavBar />
      {children}
    </div>
  );
}
