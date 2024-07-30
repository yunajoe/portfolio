import classNames from "classnames/bind";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);

type MyProfileEditLayoutProps = {
  children: React.ReactNode;
};

function MyProfileSettingLayout({ children }: MyProfileEditLayoutProps) {
  return <div className={cx("container")}>{children}</div>;
}

export default MyProfileSettingLayout;
