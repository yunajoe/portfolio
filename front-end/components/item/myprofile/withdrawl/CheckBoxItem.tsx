import CheckIcon from "@/public/icons/CheckIcon";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./CheckBoxItem.module.scss";
const cx = classNames.bind(styles);

type CheckBoxItemProps = {
  type: string;
  agreeSelectOptions: { first_option: boolean; second_option: boolean };
  setAgreeSelectOptions: React.Dispatch<
    SetStateAction<{ first_option: boolean; second_option: boolean }>
  >;
};

function CheckBoxItem({
  type,
  agreeSelectOptions,
  setAgreeSelectOptions,
}: CheckBoxItemProps) {
  const option =
    type === "first"
      ? agreeSelectOptions.first_option
      : agreeSelectOptions.second_option;

  const handleFirstOption = () => {
    setAgreeSelectOptions((prev) => {
      return {
        ...prev,
        first_option: !prev.first_option,
      };
    });
  };

  const handleSecondOption = () => {
    setAgreeSelectOptions((prev) => {
      return {
        ...prev,
        second_option: !prev.second_option,
      };
    });
  };
  return (
    <div className={cx("checkbox")}>
      <UnstyledButton
        className={cx("checkbox_button", { hidden: !option })}
        onClick={type === "first" ? handleFirstOption : handleSecondOption}
      >
        <span className={cx("checkbox_icon", { hidden: !option })}>
          <CheckIcon style={{ width: "20px" }} />
        </span>
      </UnstyledButton>
      <input
        id="agreement"
        type="checkbox"
        required
        className={cx("checkbox_input")}
      />
      <div>
        <p>
          회원 탈퇴를 진행하여 포트폴리오 사이트 계정에 귀속된 모든 정보를
          삭제하는 데 동의합니다
        </p>
      </div>
    </div>
  );
}

export default CheckBoxItem;
