import { introTextEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import styles from "./IntroduceBox.module.scss";
const cx = classNames.bind(styles);

type IntroduceBoxProps = {
  introText: string;
};

function IntroduceBox({ introText }: IntroduceBoxProps) {
  const dispatch = useAppDispatch();

  const handleIntroValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(introTextEdit(event.target.value));
  };

  return (
    <textarea
      placeholder="자기소개를 해주세요"
      className={cx("textarea")}
      value={introText}
      onChange={handleIntroValue}
    />
  );
}

export default IntroduceBox;
