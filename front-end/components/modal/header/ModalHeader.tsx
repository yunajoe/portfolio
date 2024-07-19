import CloseIcon from "@/public/icons/CloseIcon";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import React, { SetStateAction } from "react";
import styles from "./ModalHeader.module.scss";
const cx = classNames.bind(styles);

// title과 close버튼을 prop으로 받는다

type ModalHeaderProps = {
  title: string;
  close: () => void;
  reset: () => void;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  setIsItemClick: React.Dispatch<SetStateAction<boolean>>;
};

function ModalHeader({
  title,
  reset,
  close,
  setIsClick,
  setIsItemClick,
}: ModalHeaderProps) {
  const handleClose = () => {
    close();
    reset();
    setIsClick(false);
    setIsItemClick(false);
  };

  return (
    <>
      <div className={cx("container")}>
        <span className={cx("title")}>{title}</span>
        <UnstyledButton onClick={handleClose}>
          <CloseIcon
            // close={handleClose}
            style={{
              width: "20px",
              position: "absolute",
              top: "10px",
              right: "5px",
              cursor: "pointer",
            }}
          />
        </UnstyledButton>
      </div>
    </>
  );
}

export default ModalHeader;
