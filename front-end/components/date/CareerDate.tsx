import useDate from "@/hooks/useDate";
import { careerFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { CareerType } from "@/types/portpolio";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import styles from "./DateBox.module.scss";

const cx = classNames.bind(styles);

type DataBoxProps = {
  item: CareerType;
};

function CareerDate({ item }: DataBoxProps) {
  const dispatch = useDispatch();
  console.log("Carreeritem", item);

  const handleChangeCurrent = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      careerFieldEdit({
        id: item.id,
        companyName: item.companyName,
        status: item.status,
        position: item.position,
        companyDate: {
          startYear: item.companyDate?.startYear,
          startMonth: item.companyDate?.startMonth,
          endYear: item.companyDate?.endYear,
          endMonth: item.companyDate?.endMonth,
        },
        isCurrent: event.target.checked,
      })
    );
  };

  const { handleStartDate, handleEndDate } = useDate("career/date", item);

  return (
    <div className={cx("container")}>
      <div className={cx("date")}>
        <div className={cx("start_date")}>
          <input
            onChange={(event) => handleStartDate(event)}
            value={item.companyDate?.startYear || ""}
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
              value={item.companyDate?.startMonth || ""}
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
              value={item.companyDate?.endYear || ""}
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
                value={item.companyDate?.endMonth || ""}
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
        <label htmlFor="current">현재재직중</label>
      </div>
    </div>
  );
}

export default CareerDate;
