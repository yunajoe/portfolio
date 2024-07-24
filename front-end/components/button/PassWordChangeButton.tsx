import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./MyProfileEditModalButton.module.scss";
const cx = classNames.bind(styles);

type PassWordChangeButtonProps = {
  isDisabled: boolean;
  currentPassword: string;
  newPassword: string;
  reNewPassword: string;
  close: () => void;
  save: () => void;
  disabled?: false;
};

function PassWordChangeButton({
  isDisabled,
  currentPassword,
  newPassword,
  reNewPassword,
  close,
  save,
}: PassWordChangeButtonProps) {
  return (
    <div className={cx("button_container")}>
      <UnstyledButton className={cx("button", "cancel")} onClick={close}>
        취소
      </UnstyledButton>
      <UnstyledButton
        className={cx("button", "save", { disabled: isDisabled })}
        onClick={save}
      >
        저장
      </UnstyledButton>
    </div>
  );
}

export default PassWordChangeButton;
