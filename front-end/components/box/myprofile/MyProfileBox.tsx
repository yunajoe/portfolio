"use client";
import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import MyProfileName from "@/components/box/myprofile/MyProfileName";
import CareerAddButton from "@/components/button/CareerAddButton";
import EducationAddButton from "@/components/button/EducationAddButton";
import MyProfileDropDown from "@/components/dropdown/MyProfileDropDown";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
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

  return (
    <>
      <div className={cx("myprofile_container")}>
        <section className={cx("myinfo_section")}>
          <div className={cx("myinfo")}>
            <CusTomAvatar userData={userData} size="100px" />
            <MyProfileName userData={userData} />
          </div>
          <UnstyledButton
            className={cx("settings")}      
            onClick={handleOpenSetting}
          >
            설정
          </UnstyledButton>
        </section>
        <section className={cx("addbutton_section")}>
          <EducationAddButton />
          <CareerAddButton />
        </section>
      </div>
      {setting && (
        <>
          <MyProfileDropDown handleCloseSetting={handleCloseSetting} />
        </>
      )}
    </>
  );
}

export default MyProfileBox;
