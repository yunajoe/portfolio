import React, { SetStateAction, useCallback, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MajorSearch.module.css";
import { List, ScrollArea, UnstyledButton } from "@mantine/core";
import { EducationType } from "@/types/portpolio";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { educationFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
const cx = classNames.bind(styles);

type MajorSearchResultProps = {
  data: string[];
  item: EducationType;
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
