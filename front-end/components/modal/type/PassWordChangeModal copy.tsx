import PassWordChangeButton from "@/components/button/PassWordChangeButton";
import MyProfileEditModalLayout from "@/components/layout/MyProfileEditModalLayout";
import MyProfileEditModalContent from "@/components/modal/content/MyProfileEditModalContent";
import MyProfileEditModalHeader from "@/components/modal/header/MyProfileEditModalHeader";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import {
  doubleCheckNewPassword,
  passwordRegexFunc,
} from "@/utils/formInputRegex";
import { Text, TextInput } from "@mantine/core";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./PassWordChangeModal.module.scss";
const cx = classNames.bind(styles);

type PassWordChangeModalProps = {
  userData: any;
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
  const { checkUserPasswordStatus } = useAppSelector(selectStatus);

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleDoubleCheckNewPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReNewPassword(e.target.value);
  };

  // console.log("새로운 비밀번호", newPassword, passwordRegexFunc(newPassword));
  // console.log(
  //   "새로운 비밀번호 다시 확인",
  //   reNewPassword,
  //   doubleCheckNewPassword(newPassword, reNewPassword)
  // );

  const handleSave = () => {
    dispatch({
      type: "CHECK_USER_CURRENT_PASSWORD",
      _id: userData._id,
      currentPassword: currentPassword,
    });
  };

  // const newPasswordWarnig = (<>
  // {!passwordRegexFunc(newPassword) ? <>:<></>}
  // </>)

  const newPasswordWarning = (
    <div className={cx("new_password_warning")}>
      {!passwordRegexFunc(newPassword) ? (
        <p>올바르지 않은 비밀번호 입니다</p>
      ) : (
        <p>ㅇㅇㅇㅇ</p>
      )}
    </div>
  );

  const reNewPasswordWarning = (
    <div className={cx("new_password_warning")}>
      {!doubleCheckNewPassword(newPassword, reNewPassword) && (
        <p>비밀번호가 일치하지 않습니다</p>
      )}
    </div>
  );
  return (
    <MyProfileEditModalLayout style={{ padding: "10px" }}>
      <MyProfileEditModalHeader title={title} close={close} />
      <MyProfileEditModalContent>
        <div className={cx("current_password_container")}>
          <TextInput
            className={cx("text_input")}
            label="현재비밀번호"
            placeholder="비밀번호를 입력해주세요"
            size="lg"
            value={currentPassword}
            onChange={(e) => handleCurrentPassword(e)}
          />
        </div>
        <div className={cx("new_password_container")}>
          <TextInput
            label="새 비밀번호"
            placeholder="새 비밀번호를 입력해주세요"
            className={cx("text_input")}
            size="lg"
            value={newPassword}
            onChange={handleNewPassword}
          />
          {newPassword.length > 0 && newPasswordWarning}

          <TextInput
            placeholder="새 비밀번호를 다시 한번 입력해주세요"
            className={cx("text_input")}
            size="lg"
            value={reNewPassword}
            onChange={handleDoubleCheckNewPassword}
          />
          {reNewPassword.length > 0 && reNewPasswordWarning}
          <Text c="gray" className={cx("password_rule")}>
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
            이하로 입력해주세요.
          </Text>
        </div>
      </MyProfileEditModalContent>
      <PassWordChangeButton
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
