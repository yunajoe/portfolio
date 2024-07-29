import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./MyProfileWithDrawalNavBar.module.scss";
const cx = classNames.bind(styles);

function MyProfileWithDrawalNavBar() {
  return (
    <header>
      <div className={cx("container")}>
        <div>여기는몰랑</div>
        <UnstyledButton className={cx("button")}>로그아웃</UnstyledButton>
      </div>
    </header>
  );
}

export default MyProfileWithDrawalNavBar;
