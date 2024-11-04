import DownArrowIcon from "@/public/icons/DownArrowIcon";
import { TextInput } from "@mantine/core";
import classNames from "classnames/bind";
import React, { ChangeEvent, SetStateAction } from "react";
import styles from "./DropdownInput.module.css";
// import DownArrow from "@/public/icons/DownArrow";

const cx = classNames.bind(styles);

type DropdownInputTypes = {
  label: string;
  statusValue: string;
  setStatusValue: React.Dispatch<SetStateAction<string>>;
  handleStatus: () => void;
};
function DropdownInput({
  label,
  statusValue,
  setStatusValue,
  handleStatus,
}: DropdownInputTypes) {
  return (
    <div className={cx("dropdown_input")}>
      <label className={cx("label")}>{label}</label>
      <TextInput
        readOnly
        size="lg"
        value={statusValue}
        rightSectionPointerEvents="none"
        rightSection={<DownArrowIcon style={{ width: "12px" }} />}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setStatusValue(event.target.value);
        }}
        onClick={handleStatus}
      />
    </div>
  );
}

export default DropdownInput;
