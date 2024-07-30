"use client";
import MainNavBar from "@/components/navbar/MainNavBar";
import { ToastProvider } from "@/context/ToastContext";
import classNames from "classnames/bind";
import React from "react";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);
type MyPortPolioListLayoutProps = {
  children: React.ReactNode;
};

function MyPortPolioListLayout({ children }: MyPortPolioListLayoutProps) {
  return (
    <ToastProvider>
      <MainNavBar />
      {children}
    </ToastProvider>
  );
}

export default MyPortPolioListLayout;
