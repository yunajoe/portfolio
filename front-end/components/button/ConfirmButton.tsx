import { educationFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { EducationType } from "@/types/portpolio";
import { Button, UnstyledButton } from "@mantine/core";
import React, { SetStateAction } from "react";
import styles from "./CareerConfirmButton.module.css";

import classNames from "classnames/bind";
import { SchoolItem } from "@/types/api";
const cx = classNames.bind(styles);

type ConFirmButtonProps = {
  isClick: boolean;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  isSchoolItemClick: boolean;
  setIsSchoolItemClick: React.Dispatch<SetStateAction<boolean>>;
  close: () => void;
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  setSearchResult: React.Dispatch<SetStateAction<SchoolItem[]>>;
  item: EducationType;
  schoolName: string;
};

function ConfirmButton({
  isClick,
  setIsClick,
  isSchoolItemClick,
  setIsSchoolItemClick,
  close,
  searchValue,
  setSearchValue,
  setSearchResult,
  item,
  schoolName,
}: ConFirmButtonProps) {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(
      educationFieldEdit({
        id: item.id,
        schoolName: schoolName,
        major: item.major,
        schoolDate: item.schoolDate,
      })
    );

    close();
    setIsClick(false);
    setIsSchoolItemClick(false);
    setSearchValue("");
    setSearchResult([]);
  };

  return (
    <UnstyledButton
      className={cx("button", {
        "is-able": isSchoolItemClick,
        "is-disabled": !isSchoolItemClick,
      })}
      onClick={handleOnClick}
      disabled={!isSchoolItemClick}
      ta="center"
    >
      확인
    </UnstyledButton>
  );
}

export default ConfirmButton;
