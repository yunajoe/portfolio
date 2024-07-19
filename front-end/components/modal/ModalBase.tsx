import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./ModalBase.module.scss";
const cx = classNames.bind(styles);

type ModalBaseProps = {
  children: ReactNode;
};

function ModalBase({ children }: ModalBaseProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default ModalBase;
