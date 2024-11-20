"use client";
import ExternalImage from "@/components/image/ExternalImage";

import { GetRecruitmentResponse } from "@/schemas/recruitment";
import { imageSrcUrl } from "@/utils/consts";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./HiringCard.module.scss";

const cx = classNames.bind(styles);
type HiringCardProps = {
  item: GetRecruitmentResponse;
};
function HiringCard({ item }: HiringCardProps) {
  return (
    <li className={cx("container")}>
      <div className={cx("card")}>
        <Link href="">
          <div className={cx("image_container")}>
            <div className={cx("image")}>
              <ExternalImage src={imageSrcUrl} />
            </div>

            {/* 북마크 버튼이댜 */}
            <button></button>
          </div>
          <div className={cx("companyInfo_container")}>
            <h1>{item.instNm}</h1>
            <h2>{item.recrutPbancTtl}</h2>
            <h2>{item.recrutSeNm}</h2>
            <p>{item.workRgnNmLst}</p>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default HiringCard;
