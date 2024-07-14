import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);
type BoardPageLayoutProps = {
  children: React.ReactNode;
};

function BoardPageLayout({ children }: BoardPageLayoutProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default BoardPageLayout;
