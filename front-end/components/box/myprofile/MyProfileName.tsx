import { GetUserResponse } from "@/schemas/user";
import classNames from "classnames/bind";
import styles from "./MyProfileName.module.scss";

const cx = classNames.bind(styles);
type MyProfileNameProps = {
  userData: GetUserResponse;
};

function MyProfileName({ userData }: MyProfileNameProps) {
  return <span className={cx("username")}>{userData.username}</span>;
}

export default MyProfileName;
