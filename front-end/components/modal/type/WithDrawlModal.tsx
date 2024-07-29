import MyProfileEditModalLayout from "@/components/layout/MyProfileEditModalLayout";
import MyProfileEditModalContent from "@/components/modal/content/MyProfileEditModalContent";
import MyProfileEditModalHeader from "@/components/modal/header/MyProfileEditModalHeader";
import DownArrow from "@/public/icons/DownArrow";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { User } from "@/types/api";
import { Text, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./WithDrawlModal.module.scss";
const cx = classNames.bind(styles);

type WithDrawlModalProps = {
  userData: User;
  title: string;
  close: () => void;
};

function WithDrawlModal({ userData, title, close }: WithDrawlModalProps) {
  const [selectedValue, setSelectedValue] = useState("선택하기");
  const [textAreaValue, setTextAreaValue] = useState("");

  const dispatch = useAppDispatch();

  const handleGetOptionValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    setSelectedValue(optionValue);
    if (optionValue !== "기타의견") {
      setTextAreaValue("");
    }
  };
  const isDisabled =
    selectedValue === "선택하기" ||
    (selectedValue === "기타의견" && textAreaValue.length === 0);
  const showTextArea = selectedValue === "기타의견";

  const handleConfirmWithDrawl = () => {
    dispatch({ type: "WITHDRAWAL_REQUEST", _id: userData._id });
  };

  const handleTextAreaOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <MyProfileEditModalLayout>
      <MyProfileEditModalHeader title={title} close={close} />
      <MyProfileEditModalContent>
        <form>
          <div className={cx("container")}>
            <Text size="25px" fw={700} className={cx("title")}>
              탈퇴사유를 알려주세요
            </Text>
            <div className={cx("select_container")}>
              <select className={cx("select")} onChange={handleGetOptionValue}>
                <option>선택하기</option>
                <option>다른 포트폴리오 사이틀르 이용하고 있어서</option>
                <option>포트폴리오 구성/디자인이 별로여서</option>
                <option>사람들의 포트폴리오 자료 부족</option>
                <option>기타의견</option>
              </select>
              <div className={cx("icon_container")}>
                <DownArrow style={{ width: "15px", color: "gray" }} />
              </div>
            </div>
            <textarea
              value={textAreaValue}
              onChange={handleTextAreaOnChange}
              className={cx("textarea", { show: showTextArea })}
              name="reason_message"
              placeholder="자세한 사유를 입력해주세요"
            ></textarea>
          </div>
          <div className={cx("button_container")}>
            <UnstyledButton
              className={cx("button", { disabled: isDisabled })}
              onClick={handleConfirmWithDrawl}
            >
              회원탈퇴
            </UnstyledButton>
          </div>
        </form>
      </MyProfileEditModalContent>
    </MyProfileEditModalLayout>
  );
}

export default WithDrawlModal;
