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
    <>
      <MainNavBar />
      {children}
    </>
  );
}

export default MyPortPolioListLayout;
