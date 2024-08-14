import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./SectionHead.module.scss";
const cx = classNames.bind(styles);

type SectionHeadProps = {
  targetIcon: ReactNode;
  title: string;
};

function SectionHead({ targetIcon, title }: SectionHeadProps) {
  return (
    <div className={cx("section_head")}>
      {targetIcon}
      <h1 className={cx("title")}>{title}</h1>
    </div>
  );
}

export default SectionHead;
