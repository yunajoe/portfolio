import CareerConfirmButton from "@/components/button/CareerConfirmButton";
import StatusDropdown from "@/components/dropdown/StatusDropdown";
import SearchInput from "@/components/input/SearchInput";
import CompanySearchResult from "@/components/search/CompanySearchResult";
import { CareerType } from "@/types/portpolio";
import classNames from "classnames/bind";
import React, { ChangeEvent, SetStateAction } from "react";
import DropdownInput from "../../input/DropdownInput";
import styles from "./SearchModalContent.module.scss";

const cx = classNames.bind(styles);

export type CompanySearchBaPropsTypes = {
  data: string[];
  item: CareerType;
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  statusValue: string;
  setStatusValue: React.Dispatch<SetStateAction<string>>;
  setSearchResult: React.Dispatch<SetStateAction<string[]>>;
  isClick: boolean;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  isCompanyItemClick: boolean;
  setIsCompanyItemClick: React.Dispatch<SetStateAction<boolean>>;
  isStatusClick: boolean;
  setIsStatusClick: React.Dispatch<SetStateAction<boolean>>;
  handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
  close: () => void;
};

function SearchModalContent({
  item,
  data,
  searchValue,
  setSearchValue,
  statusValue,
  setStatusValue,
  setSearchResult,
  handleChangeFunc,
  isClick,
  setIsClick,
  isCompanyItemClick,
  setIsCompanyItemClick,
  isStatusClick,
  setIsStatusClick,
  close,
}: CompanySearchBaPropsTypes) {
  const handleStatus = () => {
    setIsStatusClick(true);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("input_container")}>
        <div className={cx("search_input")}>
          <SearchInput
            label="회사명"
            placeholder="회사명 검색"
            value={searchValue}
            handleChangeFunc={handleChangeFunc}
            setIsClick={setIsClick}
          />

          {/* 회사검색결과 */}
          {isClick && searchValue.length > 0 && (
            <CompanySearchResult
              data={data}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setIsClick={setIsClick}
              setIsCompanyItemClick={setIsCompanyItemClick}
            />
          )}
        </div>

        <DropdownInput
          label="재직형태"
          statusValue={statusValue}
          setStatusValue={setStatusValue}
          handleStatus={handleStatus}
        />
      </div>

      {/*  재직형태 결과*/}
      {isStatusClick && (
        <StatusDropdown
          item={item}
          statusValue={statusValue}
          setStatusValue={setStatusValue}
          setIsStatusClick={setIsStatusClick}
        />
      )}
      <CareerConfirmButton
        isClick={isClick}
        setIsClick={setIsClick}
        isCompanyItemClick={isCompanyItemClick}
        setIsCompanyItemClick={setIsCompanyItemClick}
        close={close}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        statusValue={statusValue}
        setSearchResult={setSearchResult}
        item={item}
      />
    </div>
  );
}

export default SearchModalContent;
