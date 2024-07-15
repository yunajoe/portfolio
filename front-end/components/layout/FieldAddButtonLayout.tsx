import { ReactNode } from "react";
import styles from "./FieldAddButtonLayout.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
type FieldAddButtonLayout = {
  children: ReactNode;
};

function FieldAddButtonLayout({ children }: FieldAddButtonLayout) {
  return <div className={cx("container")}>{children}</div>;
}

export default FieldAddButtonLayout;
