import { GetSchoolResponse } from "@/schemas/school";
import { List, ScrollArea, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import React, { SetStateAction, useCallback, useState } from "react";
import styles from "./CompanySearchResult.module.scss";
const cx = classNames.bind(styles);
type SchoolSearchResultProps = {
  data: GetSchoolResponse[];
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  setIsSchoolItemClick: React.Dispatch<SetStateAction<boolean>>;
};

function SchoolSearchResult({
  data,
  searchValue,
  setSearchValue,
  setIsClick,
  setIsSchoolItemClick,
}: SchoolSearchResultProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseOver = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const items = data.map((item, index) => (
    <UnstyledButton
      className={cx("list_item")}
      display="block"
      data-list-item
      key={item.schoolName}
      bg={index === hoveredIndex ? "blue" : undefined}
      onMouseOver={() => handleMouseOver(index)}
      onClick={() => {
        setSearchValue(item.schoolName);
        setIsClick(false);
        setIsSchoolItemClick(true);
      }}
    >
      {item.schoolName}
    </UnstyledButton>
  ));
  return (
    <ScrollArea className={cx("container")}>
      <List>
        {searchValue.length > 0 && (
          <UnstyledButton
            display="block"
            data-list-item
            className={cx("list_item")}
            onClick={() => {
              setSearchValue(searchValue);
              setIsClick(false);
              setIsSchoolItemClick(true);
            }}
          >
            직접 입력 `{searchValue}` 사용하기
          </UnstyledButton>
        )}
        {data.length > 0 && items}
      </List>
    </ScrollArea>
  );
}

export default SchoolSearchResult;
