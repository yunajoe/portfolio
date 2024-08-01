import classNames from "classnames/bind";
import styles from "./SideBarMenuItem.module.scss";
const cx = classNames.bind(styles);
type SideBarMenuItemProps = {
  icon: any;
  itemName: string;
};

function SideBarMenuItem({ icon, itemName }: SideBarMenuItemProps) {
  return (
    <li className={cx("menu_item")}>
      <a data-text={itemName} className={cx("icon_container")}>
        <div className={cx("icon")}>{icon}</div>
        <span className={cx("icon_name")}>{itemName}</span>
      </a>
    </li>
  );
}

export default SideBarMenuItem;
