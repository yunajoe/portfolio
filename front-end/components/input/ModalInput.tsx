import React from "react";
import styles from "./ModalInput.module.css";

import classNames from "classnames/bind";
import { UnstyledButton } from "@mantine/core";
const cx = classNames.bind(styles);

type ModalInputProps = {
  placeholder: string;
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>; // Use MouseEventHandler for button
};

function ModalInput({ placeholder, value, onClick }: ModalInputProps) {
  return (
    <UnstyledButton className={cx("button")} onClick={onClick}>
      {value.length > 0 ? value : placeholder}
    </UnstyledButton>
  );
}

export default ModalInput;
