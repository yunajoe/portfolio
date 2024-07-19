import ImageUploadButton from "@/components/button/ImageUploadButton";
import ModalBase from "@/components/modal/ModalBase";
import CloseIcon from "@/public/icons/CloseIcon";
import { Text, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./ImageUploadModal.module.scss";
const cx = classNames.bind(styles);

// https://www.geeksforgeeks.org/how-to-crop-images-in-reactjs/
type ImageUploadModalProps = {
  profileImageUrl: string;
  close: () => void;
  handleImageUpload: () => void;
};

function ImageUploadModal({
  profileImageUrl,
  close,
  handleImageUpload,
}: ImageUploadModalProps) {
  return (
    <ModalBase>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <Text className={cx("title")}>프로필사진</Text>
          <UnstyledButton>
            <CloseIcon style={{ width: "30px" }} close={close} />
          </UnstyledButton>
        </div>
        <div className={cx("image_container")}>
          <Image
            src={profileImageUrl}
            alt="profile_image"
            width={500}
            height={300}
          />
        </div>
        <div className={cx("button_container")}>
          <ImageUploadButton type="cancel" onClick={close} />
          <ImageUploadButton type="save" onClick={handleImageUpload} />
        </div>
      </div>
    </ModalBase>
  );
}

export default ImageUploadModal;
