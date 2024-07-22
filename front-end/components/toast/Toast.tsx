import styles from "./Toast.module.scss";

import useTimeout from "@/hooks/useTimeout";
import classNames from "classnames/bind";
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
