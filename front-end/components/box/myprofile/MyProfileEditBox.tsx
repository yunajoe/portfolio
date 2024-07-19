"use client";

import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import ModalPortal from "@/components/modal/ModalPortal";
import ImageUploadModal from "@/components/modal/type/ImageUploadModal";
import AddIcon from "@/public/icons/AddIcon";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Badge } from "@mantine/core";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./MyProfileEditBox.module.scss";

const cx = classNames.bind(styles);

function MyProfileEditBox() {
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [profileFormData, setProfileFormData] = useState<File | null>(null);
  const [path, setPath] = useState("");

  const { userData } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  console.log("userData", userData);

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

  return (
    <>
      <div>
        <section className={cx("first_section")}>
          <ol className={cx("profile")}>
            <li>
              <Link href="/myprofile">프로필</Link>
            </li>
            <li>
              <RightChevronIcon />
            </li>
            <li>프로필편집</li>
          </ol>
        </section>
        <section className={cx("second_section")}>
          <div
            className={cx("profile_initial_image")}
            style={{ border: "5px solid green", position: "relative" }}
          >
            {userData.userprofile.length > 0 ? (
              <Image
                alt="profile_image"
                src={`http://localhost:8080/static/images/${userData.userprofile}`}
                width={100}
                height={100}
              />
            ) : (
              <CusTomAvatar userData={userData} size="100px" />
            )}
            {/* {changeProfileImage} */}
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
          <p>유저닉네임자리</p>
        </section>
      </div>
      {profileImageUrl.length > 0 && (
        <ModalPortal>
          <ImageUploadModal
            profileImageUrl={profileImageUrl}
            close={handleClose}
            handleImageUpload={handleImageUpload}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default MyProfileEditBox;
