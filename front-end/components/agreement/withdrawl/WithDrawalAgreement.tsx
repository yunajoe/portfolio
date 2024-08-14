"use client";
import WithDrawalWarningText from "@/components/agreement/withdrawl/WidthDrawlWarningText";
import WithDrawalAccount from "@/components/agreement/withdrawl/WithDrawalAccount";
import WithDrawalSign from "@/components/agreement/withdrawl/WithDrawalSign";
import WithDrawalButton from "@/components/button/WithDrawalButton";
import Divider from "@/components/divider/Divider";
import {
  warning_text_one,
  warning_text_three,
  warning_text_two,
} from "@/constant/text";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import {
  deleteUserStatusReset,
  selectStatus,
} from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./WithDrawalAgreement.module.scss";
const cx = classNames.bind(styles);

function WithDrawalAgreement() {
  const [agreeSelectOptions, setAgreeSelectOptions] = useState({
    first_option: false,
    second_option: false,
  });
  const [withDrawlButton, setWithDrawlButton] = useState(false);
  const useAuthSelector = useAppSelector(selectAuth);
  const useStatusSelector = useAppSelector(selectStatus);
  const { userData } = useAuthSelector;
  const { deleteUserStatus } = useStatusSelector;
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (deleteUserStatus === 200) {
      router.push("/auth/login");
    }
    return () => {
      dispatch(deleteUserStatusReset());
    };
  }, [deleteUserStatus]);

  return (
    <form className={cx("form")}>
      <fieldset>
        <legend className={cx("title")}>
          <h1>회원 탈퇴 시 주의사항</h1>
        </legend>
        <WithDrawalWarningText warningArray={warning_text_one} />
        <WithDrawalWarningText warningArray={warning_text_two} />
        <WithDrawalWarningText warningArray={warning_text_three} />
        <Divider />
        <WithDrawalAccount userData={userData} />
        <Divider />
        <WithDrawalSign
          agreeSelectOptions={agreeSelectOptions}
          setAgreeSelectOptions={setAgreeSelectOptions}
        />
        <WithDrawalButton
          agreeSelectOptions={agreeSelectOptions}
          withDrawlButton={withDrawlButton}
          setWithDrawlButton={setWithDrawlButton}
          userData={userData}
        />
      </fieldset>
    </form>
  );
}

export default WithDrawalAgreement;
