"use client";

import ModalPortal from "@/components/modal/ModalPortal";
import WithDrawlModal from "@/components/modal/type/WithDrawlModal";
import { User } from "@/types/api";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { SetStateAction } from "react";
import styles from "./WithDrawalButton.module.scss";

type WithDrawalButtonProps = {
  agreeSelectOptions: { first_option: boolean; second_option: boolean };
  withDrawlButton: boolean;
  setWithDrawlButton: React.Dispatch<SetStateAction<boolean>>;
  userData: User;
};

const cx = classNames.bind(styles);
function WithDrawalButton({
  userData,
  agreeSelectOptions,
  withDrawlButton,
  setWithDrawlButton,
}: WithDrawalButtonProps) {
  const router = useRouter();

  const handleWithDrawlCancel = () => {
    router.push("/myprofile/setting");
  };

  const handleWithDrawlOpen = () => {
    setWithDrawlButton(true);
  };

  const handleWithDrawlClose = () => {
    setWithDrawlButton(false);
  };
  const isDisabled =
    agreeSelectOptions.first_option && agreeSelectOptions.second_option;
  return (
    <>
      <div className={cx("container")}>
        <UnstyledButton
          className={cx("button", { disabled: !isDisabled })}
          onClick={handleWithDrawlOpen}
        >
          회원탈퇴
        </UnstyledButton>
        <UnstyledButton
          className={cx("button")}
          onClick={handleWithDrawlCancel}
        >
          회원탈퇴 취소
        </UnstyledButton>
      </div>
      {withDrawlButton && (
        <ModalPortal>
          <WithDrawlModal
            title="회원탈퇴"
            close={handleWithDrawlClose}
            userData={userData}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default WithDrawalButton;
