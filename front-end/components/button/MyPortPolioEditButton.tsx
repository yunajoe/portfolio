import { CareerType, EducationType } from "@/types/portpolio";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./MyPortPolioEditButton.module.scss";
const cx = classNames.bind(styles);
type MyPortPolioEditButtonProps = {
  onClick: () => void;
  introText: string;
  careerList: CareerType[];
  educationList: EducationType[];
};

function MyPortPolioEditButton({
  onClick,
  introText,
  careerList,
  educationList,
}: MyPortPolioEditButtonProps) {
  const isDisabled =
    introText.trim().length === 0 ||
    careerList.length === 0 ||
    educationList.length === 0;

  return (
    <div className={cx("container")}>
      <UnstyledButton
        onClick={onClick}
        className={cx("button", { disabled: isDisabled })}
      >
        작성 완료
      </UnstyledButton>
    </div>
  );
}

export default MyPortPolioEditButton;
