import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./SectionHead.module.scss";
const cx = classNames.bind(styles);

type SectionHeadProps = {
  targetIcon: ReactNode;
};

function SectionHead({ targetIcon }: SectionHeadProps) {
  return (
    <div className={cx("section_head")}>
      {targetIcon}
      {/* <PersonIcon style={{ width: "500px", height: "200px" }} /> */}
      <h1 className={cx("title")}>ABOUT ME</h1>
    </div>
  );
}

export default SectionHead;
