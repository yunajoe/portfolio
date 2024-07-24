import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./WithDrawalButton.module.scss";

type WithDrawalButtonProps = {
  agreeSelectOptions: { first_option: boolean; second_option: boolean };
};

const cx = classNames.bind(styles);
function WithDrawalButton({ agreeSelectOptions }: WithDrawalButtonProps) {
  const isDisabled =
    agreeSelectOptions.first_option && agreeSelectOptions.second_option;
  return (
    <div className={cx("container")}>
      <UnstyledButton className={cx("button", { disabled: !isDisabled })}>
        회원탈퇴
      </UnstyledButton>
      <UnstyledButton className={cx("button")}>회원탈퇴 취소</UnstyledButton>
    </div>
  );
}

export default WithDrawalButton;
