import MyProfileEditBox from "@/components/box/myprofile/MyProfileEditBox";
import MyProfileEditBoxTwo from "@/components/box/myprofile/MyProfileEditBoxTwo";
import Divider from "@/components/divider/Divider";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

function page() {
  return (
    <div className={cx("grid_container")}>
      <div className={cx("myportpolio_two")}>
        <MyProfileEditBoxTwo />
      </div>
      <Divider />
      <div className={cx("myportpolio_one")}>
        <MyProfileEditBox />
      </div>
    </div>
  );
}

export default page;
