import MainNavBar from "@/components/navbar/MainNavBar";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);
type MyPortPolioListLayoutProps = {
  children: React.ReactNode;
};

function MyPortPolioListLayout({ children }: MyPortPolioListLayoutProps) {
  return (
    <div className={cx("container")}>
      <MainNavBar />
      <div className={cx("body")}>
        <div>
          <picture>
            <img />
          </picture>
          <button></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default MyPortPolioListLayout;
