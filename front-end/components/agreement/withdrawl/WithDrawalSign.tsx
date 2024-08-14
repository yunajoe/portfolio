import CheckBoxItem from "@/components/item/myprofile/withdrawl/CheckBoxItem";
import { agreement_text_one, agreement_text_two } from "@/constant/text";
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
        text={agreement_text_one}
      />
      <CheckBoxItem
        agreeSelectOptions={agreeSelectOptions}
        setAgreeSelectOptions={setAgreeSelectOptions}
        type="second"
        text={agreement_text_two}
      />
    </div>
  );
}

export default WithDrawalSign;
