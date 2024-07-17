import classNames from "classnames/bind";

import MyProfileBox from "@/components/box/myprofile/MyProfileBox";
import MyProfileBoxTwo from "@/components/box/myprofile/MyProfileBoxTwo";
import Divider from "@/components/divider/Divider";
import MainNavBar from "@/components/navbar/MainNavBar";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

function Page() {
  return (
    <>        
      <MainNavBar />
      <div className={cx("grid_container")}>
        <div>
          <MyProfileBoxTwo />
        </div>
        <Divider />
        <div>
          <MyProfileBox />
        </div>
      </div>
    </>
  );
}

export default Page;
