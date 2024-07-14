import React, { ReactNode, SetStateAction, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./SearchModal.module.css";
import ModalBase from "@/components/modal/ModalBase";
import ModalHeader from "@/components/modal/header/ModalHeader";
const cx = classNames.bind(styles);

type SearchModalProps = {
  title: string;
  content: ReactNode;
  close: () => void;
  reset: () => void;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  setIsItemClick: React.Dispatch<SetStateAction<boolean>>;
};

function SearchModal({
  title,
  content,
  close,
  reset,
  setIsClick,
  setIsItemClick,
}: SearchModalProps) {
  return (
    <ModalBase>
      <div className={cx("modal")}>
        <ModalHeader
          title={title}
          close={close}
          reset={reset}
          setIsClick={setIsClick}
          setIsItemClick={setIsItemClick}
        />
        {content}
      </div>
    </ModalBase>
  );
}

export default SearchModal;
