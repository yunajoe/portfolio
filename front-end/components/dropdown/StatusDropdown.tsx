import { List, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction, useCallback, useState } from "react";
import styles from "./StatusDropdown.module.scss";
const cx = classNames.bind(styles);

type StatusDropdownProps = {
  // item: CareerType;
  // statusValue: string;
  setStatusValue: React.Dispatch<SetStateAction<string>>;
  setIsStatusClick: React.Dispatch<SetStateAction<boolean>>;
};

function StatusDropdown({
  // item,
  // statusValue,
  setStatusValue,
  setIsStatusClick,
}: StatusDropdownProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const positionData = ["정규직", "계약직", "인턴"];

  const handleOnClick = (status: string) => {
    setIsStatusClick(false);
    setStatusValue(status);
  };
  const handleMouseOver = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const items = positionData.map((item, index) => (
    <UnstyledButton
      className={cx("list_item")}
      onMouseOver={() => handleMouseOver(index)}
      onClick={() => handleOnClick(item)}
      display="block"
      data-list-item
      key={item}
      bg={index === hoveredIndex ? "blue" : undefined}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <div className={cx("container")}>
      <List>{items}</List>
    </div>
  );
}

export default StatusDropdown;
