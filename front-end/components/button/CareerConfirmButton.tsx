import { careerFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { UnstyledButton } from "@mantine/core";
import React, { SetStateAction } from "react";
import styles from "./CareerConfirmButton.module.scss";

import { CompanyListItem } from "@/schemas/portfolio";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type CareerConfirmButtonProps = {
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  isCompanyItemClick: boolean;
  close: () => void;
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  statusValue: string;
  setSearchResult: React.Dispatch<SetStateAction<string[]>>;
  item: CompanyListItem;
  setSearchId: React.Dispatch<SetStateAction<number | null>>;
};

function CareerConfirmButton({
  setIsClick,
  isCompanyItemClick,
  close,
  searchValue,
  setSearchValue,
  statusValue,
  setSearchResult,
  item,
  setSearchId,
}: CareerConfirmButtonProps) {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(
      careerFieldEdit({
        id: item.id,
        companyName: searchValue,
        status: statusValue,
        position: item.position,
        companyDate: item.companyDate,
        isCurrent: item.isCurrent,
      })
    );
    close();
    setIsClick(false);
    setSearchValue("");
    setSearchResult([]);
    setSearchId(null);
  };
  return (
    <UnstyledButton
      className={cx("button", {
        "is-able": isCompanyItemClick,
        "is-disabled": !isCompanyItemClick,
      })}
      onClick={handleOnClick}
      disabled={!isCompanyItemClick}
      ta="center"
    >
      확인
    </UnstyledButton>
  );
}

export default CareerConfirmButton;
