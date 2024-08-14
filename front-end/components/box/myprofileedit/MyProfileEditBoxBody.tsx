import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import AddIcon from "@/public/icons/AddIcon";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Badge, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./MyProfileEditBoxBody.module.scss";

const cx = classNames.bind(styles);

type MyProfileEditBoxBodyProps = {
  setProfileFormData: React.Dispatch<SetStateAction<File | null>>;
  setProfileImageUrl: React.Dispatch<SetStateAction<string>>;
  setProfileUserNickNameButton: React.Dispatch<SetStateAction<boolean>>;
};

function MyProfileEditBoxBody({
  setProfileFormData,
  setProfileImageUrl,
  setProfileUserNickNameButton,
}: MyProfileEditBoxBodyProps) {
  const { userData } = useAppSelector(selectAuth);
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
  return (
    <section className={cx("second_section")}>
      <div className={cx("user_profile_image_container")}>
        <ConditionCusTomAvatar
          userData={userData}
          size="150px"
          borderRadius="9999px"
        />
        <div className={cx("user_profile_image")}>
          <label htmlFor="profile_image_uploads">
            <input
              id="profile_image_uploads"
              name="profile_image_uploads"
              accept="image/png, image/jpeg, image/jpg"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <span className={cx("add_icon_container")}>
              <Badge
                circle
                size="30px"
                color="white"
                style={{
                  cursor: "pointer",
                }}
              >
                <AddIcon
                  style={{ width: "20px", color: "gray", textAlign: "center" }}
                />
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
  );
}

export default MyProfileEditBoxBody;
