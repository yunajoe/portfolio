import { Recruitment } from "@/types/api";
import classNames from "classnames/bind";
import styles from "./HiringCard.module.scss";

const cx = classNames.bind(styles);
type HiringCardProps = {
  item: Recruitment;
};
function HiringCard({ item }: HiringCardProps) {
  console.log("item", item);
  return (
    <div className={cx("card")}>
      <h1>{item.instNm}</h1>
      <h2>{item.recrutPbancTtl}</h2>
      <h2>{item.recrutSeNm}</h2>
      <p>{item.workRgnNmLst}</p>
    </div>
  );
}

export default HiringCard;
