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
      <p>헤더</p>
      <div className={cx("container")}>{children}</div>
    </>
  );
}

export default MyProfileWidthDrawlLayout;
