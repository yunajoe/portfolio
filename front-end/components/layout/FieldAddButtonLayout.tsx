import { ReactNode } from "react";
import styles from "./FieldAddButtonLayout.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
type FieldAddButtonLayoutProps = {
  children: ReactNode;
};

function FieldAddButtonLayout({ children }: FieldAddButtonLayoutProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default FieldAddButtonLayout;
