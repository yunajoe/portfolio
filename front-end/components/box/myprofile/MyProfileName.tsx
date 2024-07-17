import { User } from "@/types/api";
import classNames from "classnames/bind";
import styles from "./MyProfileName.module.scss";

const cx = classNames.bind(styles);
type MyProfileNameProps = {
  userData: User;
};

function MyProfileName({ userData }: MyProfileNameProps) {
  return <span className={cx("username")}>{userData.username}</span>;
}

export default MyProfileName;
