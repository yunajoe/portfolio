import ConfirmButton from "@/components/button/ConfirmButton";
import SearchInput from "@/components/input/SearchInput";
import SchoolSearchResult from "@/components/search/SchoolSearchResult";
import { SchoolItem } from "@/types/api";
import { EducationType } from "@/types/portpolio";
import classNames from "classnames/bind";
import React, { ChangeEvent, SetStateAction } from "react";
import styles from "./SearchModalContent.module.scss";

const cx = classNames.bind(styles);

export type SearchEducationModalContentPropsTypes = {
  data: SchoolItem[];
  item: EducationType;
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  setSearchResult: React.Dispatch<SetStateAction<SchoolItem[]>>;
  handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
  isClick: boolean;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  isSchoolItemClick: boolean;
  setIsSchoolItemClick: React.Dispatch<SetStateAction<boolean>>;
  close: () => void;
  setSearchId: React.Dispatch<SetStateAction<number | null>>;
};

function SearchEducationModalContent({
  data,
  item,
  searchValue,
  setSearchValue,
  setSearchResult,
  handleChangeFunc,
  isClick,
  setIsClick,
  isSchoolItemClick,
  setIsSchoolItemClick,
  close,
  setSearchId,
}: SearchEducationModalContentPropsTypes) {
  return (
    <div className={cx("container")}>
      <SearchInput
        label="학교"
        placeholder="학교명 검색"
        value={searchValue}
        handleChangeFunc={handleChangeFunc}
        setIsClick={setIsClick}
      />

      {/* 학교 검색 결과 */}
      {isClick && searchValue.length > 0 && (
        <SchoolSearchResult
          data={data}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setIsClick={setIsClick}
          setIsSchoolItemClick={setIsSchoolItemClick}
        />
      )}
      <ConfirmButton
        // isClick={isClick}
        setIsClick={setIsClick}
        isSchoolItemClick={isSchoolItemClick}
        setIsSchoolItemClick={setIsSchoolItemClick}
        close={close}
        // searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchResult={setSearchResult}
        item={item}
        schoolName={searchValue}
        setSearchId={setSearchId}
      />
    </div>
  );
}

export default SearchEducationModalContent;
