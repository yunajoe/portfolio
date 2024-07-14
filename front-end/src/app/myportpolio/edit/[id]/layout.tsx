"use client";
import { ToastProvider } from "@/context/ToastContext";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.css";
const cx = classNames.bind(styles);
type MyPageLayoutPros = {
  children: React.ReactNode;
};

function MyPageEditLayout({ children }: MyPageLayoutPros) {
  return (
    <div className={cx("container")}>
      <ToastProvider>{children}</ToastProvider>
    </div>
  );
}

export default MyPageEditLayout;
