import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.css";

const cx = classNames.bind(styles);
type MyPageListLayoutProps = {
  children: React.ReactNode;
};

function MyPageListLayout({ children }: MyPageListLayoutProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default MyPageListLayout;
