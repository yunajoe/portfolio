"use client";

import ModalPortal from "@/components/modal/ModalPortal";
import PassWordChangeModal from "@/components/modal/type/PassWordChangeModal";
import useToast from "@/hooks/useToast";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Text } from "@mantine/core";
import classNames from "classnames/bind";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import styles from "./MySettingBox.module.scss";
const cx = classNames.bind(styles);
function MySettingBox() {
  const { userData } = useAppSelector(selectAuth);
  const { updateUserPasswordStatus, updateUserPasswordMessage } =
    useAppSelector(selectStatus);

  const [passwordChangeButton, setPasswordChangeButton] = useState(false);

  const handleOpenPasswordModal = () => {
    setPasswordChangeButton(true);
  };

  const handleClosePasswordModal = () => {
    setPasswordChangeButton(false);
  };

  useToast("password", updateUserPasswordStatus, updateUserPasswordMessage);
  const ProfileAvatar = dynamic(
    () => import("@/components/avatar/ConditionCusTomAvatar"),
    { ssr: false }
  );
  const MyProfileName = dynamic(
    () => import("@/components/box/myprofile/MyProfileName"),
    { ssr: false }
  );
  return (
    <>
      <div className={cx("profile_container")}>
        {/* <ConditionCusTomAvatar userData={userData} size="150px" /> */}
        <ProfileAvatar userData={userData} size="150px" />
        {/* <Text size="30px" fw={600}>
          {userData.username}님, 환영해요
        </Text> */}
        <div className={cx("profile_name_container")}>
          <MyProfileName userData={userData} />
          <Text size="30px" fw={600}>
            님, 환영해요
          </Text>
        </div>
      </div>
      <div className={cx("profile_setting_container")}>
        <Text fw={900} size="24px" p="15px">
          개인정보보호
        </Text>
        <ul>
          <li onClick={handleOpenPasswordModal}>
            <Text>비밀번호 변경</Text>
            <RightChevronIcon style={{ width: "30px" }} />
          </li>
          <li>
            <Link
              href="/myprofile/withdrawal"
              className={cx("user_withdrawal_text")}
            >
              <Text>회원탈퇴</Text>
              <RightChevronIcon style={{ width: "30px" }} />
            </Link>
          </li>
        </ul>
      </div>
      {passwordChangeButton && (
        <ModalPortal>
          <PassWordChangeModal
            userData={userData}
            title="비밀번호 변경"
            close={handleClosePasswordModal}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default MySettingBox;
