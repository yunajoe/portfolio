import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./ModalBase.module.css";
const cx = classNames.bind(styles);

type ModalBaseProps = {
  children: ReactNode;
};

function ModalBase({ children }: ModalBaseProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default ModalBase;
