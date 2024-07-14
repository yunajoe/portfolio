import React from "react";
import styles from "./Toast.module.css";

import classNames from "classnames/bind";
import useTimeout from "@/hooks/useTimeout";
const cx = classNames.bind(styles);

type ToastProps = {
  message: string;
  close: () => void;
};

function Toast({ message, close }: ToastProps) {
  useTimeout(close, 3000);

  return <div className={cx("toast")}>{message}</div>;
}

export default Toast;
