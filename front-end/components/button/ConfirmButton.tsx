import { educationFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { UnstyledButton } from "@mantine/core";
import React, { SetStateAction } from "react";
import styles from "./CareerConfirmButton.module.scss";

import { SchoolListItem } from "@/schemas/portfolio";
import { GetSchoolResponse } from "@/schemas/school";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type ConFirmButtonProps = {
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  isSchoolItemClick: boolean;
  setIsSchoolItemClick: React.Dispatch<SetStateAction<boolean>>;
  close: () => void;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  setSearchResult: React.Dispatch<SetStateAction<GetSchoolResponse[]>>;
  item: SchoolListItem;
  schoolName: string;
  setSearchId: React.Dispatch<SetStateAction<number | null>>;
};

function ConfirmButton({
  setIsClick,
  isSchoolItemClick,
  setIsSchoolItemClick,
  close,
  setSearchValue,
  setSearchResult,
  item,
  schoolName,
  setSearchId,
}: ConFirmButtonProps) {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(
      educationFieldEdit({
        id: item.id,
        schoolName: schoolName,
        major: item.major,
        schoolDate: item.schoolDate,
        isCurrent: item.isCurrent,
      })
    );

    close();
    setIsClick(false);
    setIsSchoolItemClick(false);
    setSearchValue("");
    setSearchResult([]);
    setSearchId(null);
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
