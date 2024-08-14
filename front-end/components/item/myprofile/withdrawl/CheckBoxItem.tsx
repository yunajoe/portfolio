import CheckIcon from "@/public/icons/CheckIcon";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./CheckBoxItem.module.scss";
const cx = classNames.bind(styles);

type CheckBoxItemProps = {
  type: string;
  text: string;
  agreeSelectOptions: { first_option: boolean; second_option: boolean };
  setAgreeSelectOptions: React.Dispatch<
    SetStateAction<{ first_option: boolean; second_option: boolean }>
  >;
};

function CheckBoxItem({
  type,
  text,
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
          {text}
        </p>
      </div>
    </div>
  );
}

export default CheckBoxItem;
