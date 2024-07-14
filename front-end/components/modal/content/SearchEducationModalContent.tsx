import ConfirmButton from "@/components/button/ConfirmButton";
import SearchInput from "@/components/input/SearchInput";
import SchoolSearchResult from "@/components/search/SchoolSearchResult";
import { EducationType } from "@/types/portpolio";
import React, { ChangeEvent, SetStateAction } from "react";
import styles from "./SearchModalContent.module.css";
import classNames from "classnames/bind";
import { SchoolItem } from "@/types/api";

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
        isClick={isClick}
        setIsClick={setIsClick}
        isSchoolItemClick={isSchoolItemClick}
        setIsSchoolItemClick={setIsSchoolItemClick}
        close={close}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchResult={setSearchResult}
        item={item}
        schoolName={searchValue}
      />
    </div>
  );
}

export default SearchEducationModalContent;
