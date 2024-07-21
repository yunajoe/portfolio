"use client";
import MyProfileEditNavBar from "@/components/navbar/MyProfileEditNavBar";
import { ToastProvider } from "@/context/ToastContext";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);
type MyProfileEditLayoutProps = {
  children: React.ReactNode;
};

function MyProfileEditLayout({ children }: MyProfileEditLayoutProps) {
  return (
    <div className={cx("container")}>
      <ToastProvider>
        <MyProfileEditNavBar />
        {children}
      </ToastProvider>
    </div>
  );
}
export default MyProfileEditLayout;
