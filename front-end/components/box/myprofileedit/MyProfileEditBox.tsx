"use client";

import MyProfileEditBoxBody from "@/components/box/myprofileedit/MyProfileEditBoxBody";
import MyProfileEditBoxHeader from "@/components/box/myprofileedit/MyProfileEditBoxHeader";
import ModalPortal from "@/components/modal/ModalPortal";
import ImageUploadModal from "@/components/modal/type/ImageUploadModal";
import UserNickNameEditModal from "@/components/modal/type/UserNickNameEditModal";
import useToast from "@/hooks/useToast";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { useEffect, useState } from "react";

function MyProfileEditBox() {
  const { userData } = useAppSelector(selectAuth);
  const {
    updateUserNickNameStatus,
    updateUserNickNameMessage,
    updateProfileImageStatus,
    updateProfileImageMessage,
  } = useAppSelector(selectStatus);

  console.log(
    " updatePortPolioNameStatus",
    updateProfileImageStatus,
    updateProfileImageMessage
  );

  const [profileImageUrl, setProfileImageUrl] = useState("");
  // 아래처럼 하면은 왜 안될까유?
  // const [newUserName, setNewUserName] = useState(userData.username);

  const [profileUserNickNameButton, setProfileUserNickNameButton] =
    useState(false);

  const [profileFormData, setProfileFormData] = useState<File | null>(null);

  useToast("username", updateUserNickNameStatus, updateUserNickNameMessage);

  useToast("profileImage", updateProfileImageStatus, updateProfileImageMessage);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setProfileImageUrl("");
  };
  const handleImageUpload = async () => {
    if (!profileFormData) return;

    const formData = new FormData();
    formData.append("_id", userData._id);
    formData.append("file", profileFormData);

    dispatch({
      type: "UPDATE_USER_PROFILE_IMAGE",
      formData: formData,
    });

    setProfileImageUrl("");
  };

  const handleCloseUserNickName = () => {
    setProfileUserNickNameButton(false);
  };

  useEffect(() => {
    if (updateUserNickNameStatus === 200) {
      dispatch({
        type: "USER_FIND_BY_OBJECT_ID",
        _id: userData._id,
      });
    }
  }, [updateUserNickNameStatus]);

  return (
    <>
      <div>
        <MyProfileEditBoxHeader />
        <MyProfileEditBoxBody
          setProfileFormData={setProfileFormData}
          setProfileImageUrl={setProfileImageUrl}
          setProfileUserNickNameButton={setProfileUserNickNameButton}
        />
      </div>
      {profileImageUrl.length > 0 && (
        <ModalPortal>
          <ImageUploadModal
            title="프로필 이미지"
            profileImageUrl={profileImageUrl}
            close={handleClose}
            save={handleImageUpload}
          />
        </ModalPortal>
      )}
      {profileUserNickNameButton && (
        <ModalPortal>
          <UserNickNameEditModal title="이름" close={handleCloseUserNickName} />
        </ModalPortal>
      )}
    </>
  );
}

export default MyProfileEditBox;
