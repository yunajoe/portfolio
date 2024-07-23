import { measurePasswordStrength } from "@/utils/formInputRegex";
import classNames from "classnames/bind";
import styles from "./ProgressBar.module.scss";
const cx = classNames.bind(styles);
type ProgressBarProps = {
  newPassword: string;
};

function ProgressBar({ newPassword }: ProgressBarProps) {
  const strength = measurePasswordStrength(newPassword);
  const percentage =
    strength === "weak" ? "30" : strength === "moderate" ? "70" : "100";

  return (
    <>
      <progress
        value={percentage}
        max="100"
        className={cx("container", strength)}
      />
      <p>비밀번호 보안 수준: {strength}</p>
    </>
  );
}

export default ProgressBar;
