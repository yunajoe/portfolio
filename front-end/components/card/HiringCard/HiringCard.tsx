"use client";
import ExternalImage from "@/components/image/ExternalImage";

import BookMarkButton from "@/components/button/BookMarkButton";
import { GetRecruitmentResponse } from "@/schemas/recruitment";
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
              <ExternalImage src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className={cx("bookmark_button")}>
              <BookMarkButton />
            </div>
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
