import { List, ScrollArea, Text, UnstyledButton } from "@mantine/core";
import React, { SetStateAction, useCallback, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CompanySearchResult.module.css";

const cx = classNames.bind(styles);

type CompanySearchResultProps = {
  searchValue: string;
  data: string[];
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  setIsClick: React.Dispatch<SetStateAction<boolean>>;
  setIsCompanyItemClick: React.Dispatch<SetStateAction<boolean>>;
};

function CompanySearchResult({
  searchValue,
  data,
  setSearchValue,
  setIsClick,
  setIsCompanyItemClick,
}: CompanySearchResultProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseOver = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const items = data.map((item, index) => (
    <UnstyledButton
      className={cx("list_item")}
      display="block"
      data-list-item
      key={item}
      bg={index === hoveredIndex ? "blue" : undefined}
      onMouseOver={() => handleMouseOver(index)}
      onClick={() => {
        setSearchValue(item);
        setIsClick(false);
        setIsCompanyItemClick(true);
      }}
    >
      {item}
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
              setIsCompanyItemClick(true);
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

export default CompanySearchResult;
