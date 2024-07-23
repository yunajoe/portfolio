import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./MyProfileEditModalButton.module.scss";
const cx = classNames.bind(styles);

type MyProfileEditModalButtonProps = {
  close: () => void;
  save: () => void;
  disabled?: false;
};

function MyProfileEditModalButton({
  close,
  save,
}: MyProfileEditModalButtonProps) {
  return (
    <div className={cx("button_container")}>
      <UnstyledButton className={cx("button", "cancel")} onClick={close}>
        취소
      </UnstyledButton>
      <UnstyledButton className={cx("button", "save")} onClick={save}>
        저장
      </UnstyledButton>
    </div>
  );
}

export default MyProfileEditModalButton;
