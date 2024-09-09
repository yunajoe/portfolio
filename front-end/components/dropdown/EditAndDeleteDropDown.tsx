import useOnClickOutside from "@/hooks/useOnClickOutside";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction, useRef } from "react";
import styles from "./EditAndDeleteDropDown.module.scss";
const cx = classNames.bind(styles);

type EditAndDeleteDropDownProps = {
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
  handleChangeResumeName: () => void;
  handleDeleteResume: () => void;
  isResumeNameEdit: boolean;
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>;
};

function EditAndDeleteDropDown({
  setDeleteDropDownId,
  handleChangeResumeName,
  handleDeleteResume,
  isResumeNameEdit,
  setIsResumeNameEdit,
}: EditAndDeleteDropDownProps) {
  const ref = useRef(null);

  const handleClickOutside = () => {
    setDeleteDropDownId("");
    setIsResumeNameEdit(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={cx("container")} ref={ref}>
      <UnstyledButton className={cx("menu")} onClick={handleChangeResumeName}>
        이력서이름변경
      </UnstyledButton>
      <UnstyledButton className={cx("menu")} onClick={handleDeleteResume}>
        이력서삭제
      </UnstyledButton>
    </div>
  );
}

export default EditAndDeleteDropDown;
