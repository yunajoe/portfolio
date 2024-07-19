"use client";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./ImageUploadButton.module.scss";
const cx = classNames.bind(styles);

type ImageUploadButtonProps = {
  type: "cancel" | "save";
  onClick: () => void;
};

function ImageUploadButton({ type, onClick }: ImageUploadButtonProps) {
  return (
    <UnstyledButton className={cx("button", type)} onClick={onClick}>
      {type === "cancel" ? "취소" : "저장"}
    </UnstyledButton>
  );
}

export default ImageUploadButton;
