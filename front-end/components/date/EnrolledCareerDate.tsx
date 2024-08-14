import { CareerType } from "@/types/portpolio";
import classNames from "classnames/bind";
import styles from "./EnrolledDate.module.scss";
const cx = classNames.bind(styles);
type EnrolledDateProps = {
  item: CareerType;
};

function EnrolledCareerDate({ item }: EnrolledDateProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("start")}>
        <span>{item.companyDate.startYear}</span>
        <span>.</span>
        <span>{item.companyDate.startMonth}</span>
      </div>
      <div>-</div>
      {!item.isCurrent ? (
        <div className={cx("end")}>
          <span>{item.companyDate.endYear}</span>
          <span>.</span>
          <span>{item.companyDate.endMonth}</span>
        </div>
      ) : (
        <span>현재재직중</span>
      )}
    </div>
  );
}

export default EnrolledCareerDate;
