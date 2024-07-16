import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import CareerAddButton from "@/components/button/CareerAddButton";
import EducationAddButton from "@/components/button/EducationAddButton";
import { User } from "@/types/api";
import classNames from "classnames/bind";
import styles from "./MyProfileBox.module.scss";

const cx = classNames.bind(styles);

type MyProfileBoxProps = {
  userData: User;
};

function MyProfileBox({ userData }: MyProfileBoxProps) {
  console.log("ㅎㅎㅎ", userData);

  return (
    <div className={cx("myprofile_container")}>
      <section className={cx("myinfo_section")}>
        <div className={cx("myinfo")}>
          <CusTomAvatar userData={userData} />
          <span>{userData.username}</span>
        </div>
        <div className={cx("settings")}>설정</div>
      </section>
      <section className={cx("addbutton_section")}>
        <EducationAddButton />
        <CareerAddButton />
      </section>
    </div>
  );
}

export default MyProfileBox;
