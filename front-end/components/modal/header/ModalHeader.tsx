import React, { SetStateAction } from "react";
import classNames from "classnames/bind";
import styles from "./ModalHeader.module.css";
import CloseIcon from "@/public/icons/CloseIcon";
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
        <CloseIcon
          close={handleClose}
          style={{
            width: "20px",
            position: "absolute",
            top: "10px",
            right: "5px",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}

export default ModalHeader;
