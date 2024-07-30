import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);
type MyPortPolioEditLayoutProps = {
  children: React.ReactNode;
};

function MyPortPolioEditLayout({ children }: MyPortPolioEditLayoutProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default MyPortPolioEditLayout;
