"use client";
import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import MyProfileName from "@/components/box/mypofile/MyProfileName";
import CareerAddButton from "@/components/button/CareerAddButton";
import EducationAddButton from "@/components/button/EducationAddButton";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import styles from "./MyProfileBox.module.scss";

const cx = classNames.bind(styles);

function MyProfileBox() {
  const { userData } = useAppSelector(selectAuth);

  return (
    <div className={cx("myprofile_container")}>
      <section className={cx("myinfo_section")}>
        <div className={cx("myinfo")}>
          <CusTomAvatar userData={userData} size="100px" />
          <MyProfileName userData={userData} />
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
