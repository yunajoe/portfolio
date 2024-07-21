import MyProfileBoxTwo from "@/components/box/myprofile/MyProfileBoxTwo";
import MyProfileEditBox from "@/components/box/myprofileedit/MyProfileEditBox";
import Divider from "@/components/divider/Divider";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

function Page() {
  return (
    <div className={cx("grid_container")}>
      <MyProfileBoxTwo show={false} />
      <Divider />
      <MyProfileEditBox />
    </div>
  );
}

export default Page;
