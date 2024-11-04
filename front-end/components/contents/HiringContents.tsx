"use client";
import FilterTag from "@/components/tag/FilterTag";
import DownChevronIcon from "@/public/icons/DownChevronIcon";
import { Recruitment } from "@/types/api";
import { Button } from "@mantine/core";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./HiringContents.module.scss";

const cx = classNames.bind(styles);

type HiringContentsProps = {
  data: Recruitment[];
};

//
function HiringContents({ data }: HiringContentsProps) {
  //   filterCompanyByCategory(data, hiringCompanyCategory);
  console.log("data", data);
  const [region, setRegion] = useState("전체");
  const [position, setPosition] = useState("정규직");
  const [education, setEducation] = useState("학력무관");

  return (
    <div className={cx("container")}>
      <section className={cx("button_section")}>
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
      <section className={cx("tag_section")}>
        <FilterTag tag={region} />
        <FilterTag tag={position} />
        <FilterTag tag={education} width="140px" />
      </section>
      {/* data리스트 */}
      <section className={cx("")}></section>

      {/*  페이지네이션*/}
      <div></div>
    </div>
  );
}

export default HiringContents;
