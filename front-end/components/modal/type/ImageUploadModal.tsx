import MyProfileEditModalButton from "@/components/button/MyProfileEditModalButton";
import MyProfileEditModalLayout from "@/components/layout/MyProfileEditModalLayout";
import MyProfileEditModalContent from "@/components/modal/content/MyProfileEditModalContent";
import MyProfileEditModalHeader from "@/components/modal/header/MyProfileEditModalHeader";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./ImageUploadModal.module.scss";
const cx = classNames.bind(styles);

type ImageUploadModalProps = {
  title: string;
  profileImageUrl: string;
  close: () => void;
  save: () => void;
};

function ImageUploadModal({
  title,
  profileImageUrl,
  close,
  save,
}: ImageUploadModalProps) {
  return (
    <MyProfileEditModalLayout>
      <MyProfileEditModalHeader title={title} close={close} />
      <MyProfileEditModalContent>
        <div className={cx("image_container")}>
          <Image
            src={profileImageUrl}
            alt="profile_image"
            width={500}
            height={300}
          />
        </div>
      </MyProfileEditModalContent>
      <MyProfileEditModalButton close={close} save={save} />
    </MyProfileEditModalLayout>
  );
}

export default ImageUploadModal;
