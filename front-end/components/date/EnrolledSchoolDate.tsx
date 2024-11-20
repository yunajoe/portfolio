import { SchoolListItem } from "@/schemas/portfolio";
import classNames from "classnames/bind";
import styles from "./EnrolledDate.module.scss";
const cx = classNames.bind(styles);
type EnrolledDateProps = {
  item: SchoolListItem;
};

function EnrolledSchoolDate({ item }: EnrolledDateProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("start")}>
        <span>{item.schoolDate.startYear}</span>
        <span>.</span>
        <span>{item.schoolDate.startMonth}</span>
      </div>
      <div>-</div>
      {!item.isCurrent ? (
        <div className={cx("end")}>
          <span>{item.schoolDate.endYear}</span>
          <span>.</span>
          <span>{item.schoolDate.endMonth}</span>
        </div>
      ) : (
        <span>현재재학중</span>
      )}
    </div>
  );
}

export default EnrolledSchoolDate;
