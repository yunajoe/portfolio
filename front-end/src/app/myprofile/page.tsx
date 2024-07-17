import classNames from "classnames/bind";

import MyProfileBox from "@/components/box/myprofile/MyProfileBox";
import MyProfileBoxTwo from "@/components/box/myprofile/MyProfileBoxTwo";
import Divider from "@/components/divider/Divider";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

function Page() {
  return (
    <div className={cx("grid_container")}>
      <MyProfileBoxTwo />
      <Divider />
      <MyProfileBox />
    </div>
  );
}

export default Page;
