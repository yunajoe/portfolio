import useDate from "@/hooks/useDate";
import {
  educationFieldEdit,
  EducationType,
} from "@/src/app/lib/features/portpolio/portpolioSlice";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import styles from "./DateBox.module.scss";

const cx = classNames.bind(styles);

type DataBoxProps = {
  item: EducationType;
};

function EducationDate({ item }: DataBoxProps) {
  const dispatch = useDispatch();
  console.log("EducationItem", item);

  const handleChangeCurrent = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      educationFieldEdit({
        id: item.id,
        schoolDate: item.schoolDate,
        schoolName: item.schoolName,
        major: item.major,
        isCurrent: event.target.checked,
      })
    );
  };

  const { handleStartDate, handleEndDate } = useDate("education/date", item);

  return (
    <div className={cx("container")}>
      <div className={cx("date")}>
        <div className={cx("start_date")}>
          <input
            onChange={(event) => handleStartDate(event)}
            value={item.schoolDate?.startYear}
            className={cx("input_year")}
            name="startYear"
            maxLength={4}
            placeholder="YYYY"
            type="text"
          />
          <span>
            .
            <input
              onChange={(event) => handleStartDate(event)}
              value={item.schoolDate?.startMonth}
              name="startMonth"
              maxLength={2}
              placeholder="MM"
              type="text"
              className={cx("input_month")}
            />
          </span>
        </div>

        {!item.isCurrent ? (
          <div className={cx("end_date")}>
            <span>-</span>
            <input
              onChange={(event) => handleEndDate(event)}
              value={item.schoolDate?.endYear}
              name="endYear"
              maxLength={4}
              placeholder="YYYY"
              type="text"
              className={cx("input_year")}
            />
            <span>
              .
              <input
                onChange={(event) => handleEndDate(event)}
                value={item.schoolDate?.endMonth}
                name="endMonth"
                maxLength={2}
                placeholder="MM"
                type="text"
                className={cx("input_month")}
              />
            </span>
          </div>
        ) : (
          <div style={{ width: "100px" }} />
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="current"
          name="current"
          checked={item.isCurrent}
          onChange={handleChangeCurrent}
        />
        <label htmlFor="current">현재재학중</label>
      </div>
    </div>
  );
}

export default EducationDate;
