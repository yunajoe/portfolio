import HamburgerIcon from "@/public/icons/HamburgerIcon";
import { Item } from "@/schemas/portfolio";
import { Flex } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./PortPolioCardBottom.module.scss";
const cx = classNames.bind(styles);

type PortPolioBottomProps = {
  data: Item;
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
  setIsEditAndDeleteDropDown: React.Dispatch<SetStateAction<boolean>>;
};

function PortPolioCardBottom({
  data,
  setDeleteDropDownId,
  setIsEditAndDeleteDropDown,
}: PortPolioBottomProps) {
  return (
    <Flex
      className={cx("container")}
      justify="flex-end"
      align="center"
      onClick={(e) => {
        e.stopPropagation();
        setDeleteDropDownId(data._id);
        setIsEditAndDeleteDropDown(true);
      }}
    >
      <HamburgerIcon style={{ width: "30px" }} />
    </Flex>
  );
}

export default PortPolioCardBottom;
