"use client";
import HiringCard from "@/components/card/HiringCard/HiringCard";
import FilterTag from "@/components/tag/FilterTag";
import DownChevronIcon from "@/public/icons/DownChevronIcon";
import { GetRecruitmentResponse } from "@/schemas/recruitment";
import { Button } from "@mantine/core";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./HiringContents.module.scss";

const cx = classNames.bind(styles);

type HiringContentsProps = {
  data: GetRecruitmentResponse[];
};

function HiringContents({ data }: HiringContentsProps) {
  // filterCompanyByCategory(data, hiringCompanyCategory);
  const sampleData = data.slice(0, 20);
  const [region, setRegion] = useState("전체(지역)");
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
        <FilterTag tag={region} width="140px" />
        <FilterTag tag={position} />
        <FilterTag tag={education} width="140px" />
      </section>
      {/* data리스트 */}
      <section className={cx("data_section")}>
        {sampleData.map((item) => (
          <HiringCard item={item} key={item._id} />
        ))}
      </section>
      {/*  페이지네이션*/}
      <div></div>
    </div>
  );
}

export default HiringContents;
