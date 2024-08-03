import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./SideBarMenuItem.module.scss";
const cx = classNames.bind(styles);
type SideBarMenuItemProps = {
  icon: any;
  itemName: string;

  handleClick: any;
};

function SideBarMenuItem({
  icon,
  itemName,

  handleClick,
}: SideBarMenuItemProps) {
  return (
    <li className={cx("menu_item")}>
      <UnstyledButton
        data-text={itemName}
        className={cx("icon_container")}
        onClick={() => {
          handleClick(itemName);
        }}
      >
        <div className={cx("icon")}>{icon}</div>
        <span className={cx("icon_name")}>{itemName}</span>
      </UnstyledButton>
    </li>
  );
}

export default SideBarMenuItem;
