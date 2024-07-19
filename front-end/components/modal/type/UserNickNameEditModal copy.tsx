import MyProfileEditModalButton from "@/components/button/MyProfileEditModalButton";
import MyProfileEditModalLayout from "@/components/layout/MyProfileEditModalLayout";
import MyProfileEditModalContent from "@/components/modal/content/MyProfileEditModalContent";
import MyProfileEditModalHeader from "@/components/modal/header/MyProfileEditModalHeader";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { TextInput } from "@mantine/core";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./UserNickNameEditModal.module.scss";
const cx = classNames.bind(styles);

type UserNickNameEditModalProps = {
  title: string;
  close: () => void;
  save: () => void;
  // userName: string;
};

function UserNickNameEditModal({
  title,
  close,
  save,
}: UserNickNameEditModalProps) {
  const { userData } = useAppSelector(selectAuth);
  const [newUserName, setNewUserName] = useState(userData.username);
  const dispatch = useAppDispatch();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value);
  };

  const handleValueSave = () => {
    dispatch({
      type: "UPDATE_USER_NAME",
      _id: userData._id,
      username: newUserName,
    });
    close();
  };

  return (
    <MyProfileEditModalLayout>
      <MyProfileEditModalHeader title={title} close={close} />
      <MyProfileEditModalContent>
        <TextInput
          onChange={handleValueChange}
          value={newUserName}
          className={cx("user_nickname_input")}
          size="lg"
        />
      </MyProfileEditModalContent>
      <MyProfileEditModalButton close={close} save={handleValueSave} />
    </MyProfileEditModalLayout>
  );
}

export default UserNickNameEditModal;
