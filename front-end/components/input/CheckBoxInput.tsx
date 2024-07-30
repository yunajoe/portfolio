import { Checkbox } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./CheckBoxInput.module.scss";
const cx = classNames.bind(styles);

function CheckBoxInput() {
  return (
    <div className={cx("container")}>
      <Checkbox />
      <div>
        <label>자동로그인</label>
      </div>
    </div>
  );
}

export default CheckBoxInput;
