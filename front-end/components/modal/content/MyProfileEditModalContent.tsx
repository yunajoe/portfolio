import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./MyProfileEditModalContent.module.scss";
const cx = classNames.bind(styles);

type MyProfileEditModalContentProps = {
  children: ReactNode;
};

function MyProfileEditModalContent({
  children,
}: MyProfileEditModalContentProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default MyProfileEditModalContent;
