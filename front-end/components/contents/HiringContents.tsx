"use client";
import DownChevronIcon from "@/public/icons/DownChevronIcon";
import { Recruitment } from "@/types/api";
import { Button } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./HiringContents.module.scss";

const cx = classNames.bind(styles);

type HiringContentsProps = {
  data: Recruitment[];
};

//
function HiringContents({ data }: HiringContentsProps) {
  //   filterCompanyByCategory(data, hiringCompanyCategory);
  console.log("data", data);

  return (
    <div className={cx("container")}>
      <section>
        <div className={cx("button_container")}>
          <Button
            justify="center"
            fullWidth
            rightSection={<DownChevronIcon />}
            variant="default"
            mt="md"
          >
            직군 전체
          </Button>
          <Button
            justify="center"
            fullWidth
            rightSection={<DownChevronIcon />}
            variant="default"
            mt="md"
          >
            신입
          </Button>
        </div>
      </section>
      {/* 태그 */}
      <section>
        <div>지역태그(서울, 부산, 경기)</div>
        <div>정규직, 비정규직</div>
        <div>최소학력(학력무관, 고졸, 고졸(2~3년), 대졸(4년))</div>
      </section>
      {/* data리스트 */}
      <section></section>

      {/*  페이지네이션*/}
      <div></div>
    </div>
  );
}

export default HiringContents;
