"use client";
import { ToastProvider } from "@/context/ToastContext";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);

type MyProfileEditLayoutProps = {
  children: React.ReactNode;
};

function MyProfileSettingLayout({ children }: MyProfileEditLayoutProps) {
  return (
    <ToastProvider>
      <div>헤더</div>
      <div className={cx("container")}>{children}</div>
    </ToastProvider>
  );
}

export default MyProfileSettingLayout;
