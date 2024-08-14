"use client";
import CareerAddButton from "@/components/button/CareerAddButton";
import EducationAddButton from "@/components/button/EducationAddButton";
import MyProfileDropDown from "@/components/dropdown/MyProfileDropDown";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./MyProfileBox.module.scss";

const cx = classNames.bind(styles);

function MyProfileBox() {
  const [setting, setSettings] = useState(false);
  const { userData } = useAppSelector(selectAuth);

  const handleOpenSetting = () => {
    setSettings(true);
  };

  const handleCloseSetting = () => {
    setSettings(false);
  };
  const MyProfileName = dynamic(
    () => import("@/components/box/myprofile/MyProfileName"),
    { ssr: false }
  );
  const ProfileAvatar = dynamic(
    () => import("@/components/avatar/ConditionCusTomAvatar"),
    { ssr: false }
  );

  return (
    <div className={cx("myprofile_container")}>
      <section className={cx("myinfo_section")}>
        <div className={cx("myinfo")}>
          <ProfileAvatar
            userData={userData}
            size="100px"
            borderRadius="9999px"
          />
          <MyProfileName userData={userData} />
        </div>
        <div className={cx("settings")}>
          <UnstyledButton
            className={cx("settings_button")}
            onClick={handleOpenSetting}
          >
            설정
          </UnstyledButton>
          {setting && (
            <MyProfileDropDown handleCloseSetting={handleCloseSetting} />
          )}
        </div>
      </section>
      <section className={cx("addbutton_section")}>
        <EducationAddButton userData={userData} />
        <CareerAddButton userData={userData} />
      </section>
    </div>
  );
}

export default MyProfileBox;
