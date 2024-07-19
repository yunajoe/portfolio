import CloseIcon from "@/public/icons/CloseIcon";
import { Text, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./MyProfileEditModalHeader.module.scss";
const cx = classNames.bind(styles);

type MyProfileEditModalHeaderProps = {
  title: string;
  close: () => void;
};

function MyProfileEditModalHeader({
  title,
  close,
}: MyProfileEditModalHeaderProps) {
  return (
    <div className={cx("header")}>
      <Text className={cx("title")}>{title}</Text>
      <UnstyledButton onClick={close} className={cx("close_button")}>
        <CloseIcon style={{ width: "30px" }} />
      </UnstyledButton>
    </div>
  );
}

export default MyProfileEditModalHeader;
