import { educationFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";

import { SchoolListItem } from "@/schemas/portfolio";
import { List, ScrollArea, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import React, { SetStateAction, useCallback, useState } from "react";
import styles from "./MajorSearch.module.scss";
const cx = classNames.bind(styles);

type MajorSearchResultProps = {
  data: string[];
  item: SchoolListItem;
  searchMajorValue: string;
  setSearchMajorValue: React.Dispatch<SetStateAction<string>>;
  setIsMajorMenuClick: React.Dispatch<SetStateAction<boolean>>;
};
function MajorSearchResult({
  data,
  item,
  searchMajorValue,
  setSearchMajorValue,
  setIsMajorMenuClick,
}: MajorSearchResultProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseOver = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const dispatch = useAppDispatch();

  const items = data.map((major, index) => (
    <UnstyledButton
      className={cx("list_item")}
      display="block"
      data-list-item
      key={major}
      bg={index === hoveredIndex ? "blue" : undefined}
      onMouseOver={() => handleMouseOver(index)}
      onClick={() => {
        setSearchMajorValue(major);
        setIsMajorMenuClick(false);
        dispatch(
          educationFieldEdit({
            id: item.id,
            schoolDate: item.schoolDate,
            schoolName: item.schoolName,
            major: major,
            isCurrent: item.isCurrent,
          })
        );
      }}
    >
      {major}
    </UnstyledButton>
  ));

  return (
    <ScrollArea className={cx("container")}>
      <List>
        {searchMajorValue.length > 0 && (
          <UnstyledButton
            display="block"
            data-list-item
            className={cx("list_item")}
            onClick={() => {
              setSearchMajorValue(searchMajorValue);
              setIsMajorMenuClick(false);
            }}
          >
            직접 입력 `{searchMajorValue}` 사용하기
          </UnstyledButton>
        )}
        {data.length > 0 && items}
      </List>
    </ScrollArea>
  );
}

export default MajorSearchResult;
