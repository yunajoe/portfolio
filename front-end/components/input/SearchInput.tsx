import SearchIcon from "@/public/icons/SearchIcon";
import { TextInput } from "@mantine/core";
import React, { ChangeEvent, SetStateAction } from "react";
import classNames from "classnames/bind";
import styles from "./SearchInput.module.css";

const cx = classNames.bind(styles);
type SearchInputTypes = {
  label: string;
  placeholder: string;
  value: string;
  handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
};

function SearchInput({
  label,
  placeholder,
  value,
  handleChangeFunc,
  setIsClick,
}: SearchInputTypes) {
  return (
    <div>
      <label className={cx("label")}>{label}</label>
      <TextInput
        size="lg"
        value={value}
        mb="md"
        rightSectionPointerEvents="none"
        rightSection={<SearchIcon style={{ width: "12px" }} />}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleChangeFunc(event);
          setIsClick(true);
        }}
      />
    </div>
  );
}

export default SearchInput;
