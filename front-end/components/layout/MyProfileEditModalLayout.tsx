import { ReactNode } from "react";
import styles from "./MyProfileEditModalLayout.module.scss";

import ModalBase from "@/components/modal/ModalBase";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
type MyProfileEditModalLayoutProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

function MyProfileEditModalLayout({
  children,
  style,
}: MyProfileEditModalLayoutProps) {
  return (
    <ModalBase>
      <div className={cx("container")} style={{ ...style }}>
        {children}
      </div>
      ;
    </ModalBase>
  );
}

export default MyProfileEditModalLayout;
