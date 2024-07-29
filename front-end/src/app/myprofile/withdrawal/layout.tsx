import MyProfileWithDrawalNavBar from "@/components/navbar/MyProfileWithDrawalNavBar";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);

type MyProfileWidthDrawlLayoutProps = {
  children: React.ReactNode;
};

function MyProfileWidthDrawlLayout({
  children,
}: MyProfileWidthDrawlLayoutProps) {
  return (
    <>
      <MyProfileWithDrawalNavBar />
      <div className={cx("container")}>{children}</div>
    </>
  );
}

export default MyProfileWidthDrawlLayout;
