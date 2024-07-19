"use client";

import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import ModalPortal from "@/components/modal/ModalPortal";
import ImageUploadModal from "@/components/modal/type/ImageUploadModal";
import UserNickNameEditModal from "@/components/modal/type/UserNickNameEditModal";
import AddIcon from "@/public/icons/AddIcon";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Badge, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./MyProfileEditBox.module.scss";

const cx = classNames.bind(styles);

function MyProfileEditBox() {
  const { userData } = useAppSelector(selectAuth);
  const { updateUserNickNameStatus } = useAppSelector(selectStatus);

  console.log("userData", userData, updateUserNickNameStatus);

  const [profileImageUrl, setProfileImageUrl] = useState("");
  // 아래처럼 하면은 왜 안될까유?
  // const [newUserName, setNewUserName] = useState(userData.username);

  const [profileUserNickNameButton, setProfileUserNickNameButton] =
    useState(false);

  const [profileFormData, setProfileFormData] = useState<File | null>(null);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) return;
    const fileInfo = file[0];
    setProfileFormData(fileInfo);
    const imageUrl = URL.createObjectURL(fileInfo);
    setProfileImageUrl(imageUrl);
  };

  const handleOpenUserNickName = () => {
    setProfileUserNickNameButton(true);
  };

  const handleCloseUserNickName = () => {
    setProfileUserNickNameButton(false);
  };

  if (updateUserNickNameStatus === 200) {
    dispatch({
      type: "USER_FIND_BY_OBJECT_ID",
      _id: userData._id,
    });
  }

  return (
    <>
      <div>
        <section className={cx("first_section")}>
          <ol className={cx("profile")}>
            <li>
              <Link
                href="/myprofile"
                style={{ textDecoration: "none", color: "black" }}
              >
                프로필
              </Link>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <RightChevronIcon />
            </li>
            <li>프로필편집</li>
          </ol>
        </section>
        <section className={cx("second_section")}>
          <div className={cx("user_profile_image")}>
            {userData.userprofile.length > 0 ? (
              <div>
                <Image
                  alt="profile_image"
                  src={`http://localhost:8080/static/images/${userData.userprofile}`}
                  width={100}
                  height={100}
                />
              </div>
            ) : (
              <CusTomAvatar userData={userData} size="100px" />
            )}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "70px",
              }}
            >
              <label htmlFor="profile_image_uploads">
                <input
                  id="profile_image_uploads"
                  name="profile_image_uploads"
                  accept="image/png, image/jpeg, image/jpg"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <span>
                  <Badge
                    circle
                    size="30px"
                    color="gray"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <AddIcon style={{ width: "20px", textAlign: "center" }} />
                  </Badge>
                </span>
              </label>
            </div>
          </div>
          <div className={cx("user_nickname_container")}>
            <span className={cx("user_nickname")}>닉네임</span>
            <UnstyledButton
              className={cx("user_nickname_button")}
              onClick={handleOpenUserNickName}
            >
              <span>{userData.username}</span>
              <RightChevronIcon style={{ color: "gray" }} />
            </UnstyledButton>
          </div>
        </section>
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
