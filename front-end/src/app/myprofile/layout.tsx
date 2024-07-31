"use client";
import { ToastProvider } from "@/context/ToastContext";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);
type MyProfileLayoutProps = {
  children: React.ReactNode;
};

function MyProfileLayout({ children }: MyProfileLayoutProps) {
  return <ToastProvider>{children}</ToastProvider>;
}

export default MyProfileLayout;
