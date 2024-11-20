import PassWordChangeButton from "@/components/button/PassWordChangeButton";
import MyProfileEditModalLayout from "@/components/layout/MyProfileEditModalLayout";
import MyProfileEditModalContent from "@/components/modal/content/MyProfileEditModalContent";
import MyProfileEditModalHeader from "@/components/modal/header/MyProfileEditModalHeader";
import ProgressBar from "@/components/style/ProgressBar";
import {
  selectStatus,
  updateUserPasswordStatusReset,
} from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";

import { GetUserResponse } from "@/schemas/user";
import {
  doubleCheckNewPassword,
  passwordRegexFunc,
} from "@/utils/formInputRegex";
import { PasswordInput, Text } from "@mantine/core";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./PassWordChangeModal.module.scss";
const cx = classNames.bind(styles);

type PassWordChangeModalProps = {
  userData: GetUserResponse;
  title: string;
  close: () => void;
};

function PassWordChangeModal({
  userData,
  title,
  close,
}: PassWordChangeModalProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const dispatch = useAppDispatch();
  const { updateUserPasswordStatus, updateUserPasswordMessage } =
    useAppSelector(selectStatus);

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
    dispatch(updateUserPasswordStatusReset());
  };
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleDoubleCheckNewPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReNewPassword(e.target.value);
  };
  const isDisabled =
    !passwordRegexFunc(newPassword) ||
    !doubleCheckNewPassword(newPassword, reNewPassword) ||
    currentPassword.trim().length === 0;

  const handleSave = () => {
    dispatch({
      type: "UPDATE_USER_PASSWORD",
      _id: userData._id,
      current_password: currentPassword,
      new_password: newPassword,
    });
  };

  const currentPasswordWarning = (
    <>
      {updateUserPasswordStatus !== 200 && (
        <p className={cx("password_warning")}>{updateUserPasswordMessage}</p>
      )}
    </>
  );

  const newPasswordWarning = (
    <div className={cx("password_warning")}>
      {!passwordRegexFunc(newPassword) ? (
        <p>올바르지 않은 비밀번호 입니다</p>
      ) : (
        <ProgressBar newPassword={newPassword} />
      )}
    </div>
  );

  const reNewPasswordWarning = (
    <div className={cx("password_warning")}>
      {!doubleCheckNewPassword(newPassword, reNewPassword) && (
        <p>비밀번호가 일치하지 않습니다</p>
      )}
    </div>
  );

  useEffect(() => {
    if (updateUserPasswordStatus === 200 && !isDisabled) {
      close();
    }
  }, [updateUserPasswordStatus, isDisabled]);

  useEffect(() => {
    return () => {
      dispatch(updateUserPasswordStatusReset());
    };
  }, []);
  return (
    <MyProfileEditModalLayout style={{ padding: "10px" }}>
      <MyProfileEditModalHeader title={title} close={close} />
      <MyProfileEditModalContent>
        <form>
          <div className={cx("current_password_container")}>
            <PasswordInput
              className={cx("text_input")}
              label="현재비밀번호"
              placeholder="비밀번호를 입력해주세요"
              size="lg"
              value={currentPassword}
              onChange={(e) => handleCurrentPassword(e)}
            />
            {currentPassword.length > 0 && currentPasswordWarning}
          </div>
          <div className={cx("new_password_container")}>
            <PasswordInput
              label="새 비밀번호"
              placeholder="새 비밀번호를 입력해주세요"
              className={cx("text_input")}
              size="lg"
              value={newPassword}
              onChange={handleNewPassword}
            />
            {newPassword.length > 0 && newPasswordWarning}

            <PasswordInput
              placeholder="새 비밀번호를 다시 한번 입력해주세요"
              className={cx("text_input")}
              size="lg"
              value={reNewPassword}
              onChange={handleDoubleCheckNewPassword}
            />
            {reNewPassword.length > 0 && reNewPasswordWarning}
            <Text c="gray" className={cx("password_rule")}>
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
              16자 이하로 입력해주세요.
            </Text>
          </div>
        </form>
      </MyProfileEditModalContent>
      <PassWordChangeButton
        isDisabled={isDisabled}
        currentPassword={currentPassword}
        newPassword={newPassword}
        reNewPassword={reNewPassword}
        close={close}
        save={handleSave}
      />
    </MyProfileEditModalLayout>
  );
}

export default PassWordChangeModal;
