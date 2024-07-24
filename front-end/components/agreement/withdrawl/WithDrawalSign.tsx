import CheckBoxItem from "@/components/item/myprofile/withdrawl/CheckBoxItem";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./WithDrawalSign.module.scss";
const cx = classNames.bind(styles);

type WithDrawalSignProps = {
  agreeSelectOptions: { first_option: boolean; second_option: boolean };
  setAgreeSelectOptions: React.Dispatch<
    SetStateAction<{ first_option: boolean; second_option: boolean }>
  >;
};

function WithDrawalSign({
  agreeSelectOptions,
  setAgreeSelectOptions,
}: WithDrawalSignProps) {
  return (
    <div className={cx("container")}>
      <CheckBoxItem
        agreeSelectOptions={agreeSelectOptions}
        setAgreeSelectOptions={setAgreeSelectOptions}
        type="first"
      />
      <CheckBoxItem
        agreeSelectOptions={agreeSelectOptions}
        setAgreeSelectOptions={setAgreeSelectOptions}
        type="second"
      />
    </div>
  );
}

export default WithDrawalSign;
