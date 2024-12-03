"use client";
import HiringCard from "@/components/card/HiringCard/HiringCard";
import FilterTag from "@/components/tag/FilterTag";
import useLocalStorage from "@/hooks/use-local-storage";
import useClient from "@/hooks/useClient";
import DownChevronIcon from "@/public/icons/DownChevronIcon";
import { GetRecruitmentResponse } from "@/schemas/recruitment";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Button } from "@mantine/core";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./HiringContents.module.scss";

const cx = classNames.bind(styles);

type HiringContentsProps = {
  data: GetRecruitmentResponse[];
};

function HiringContents({ data }: HiringContentsProps) {
  const sampleData = data.slice(0, 20);
  const [region, setRegion] = useState("전체(지역)");
  const [position, setPosition] = useState("정규직");
  const [education, setEducation] = useState("학력무관");

  const [selectedData, setSelectedData] = useState<GetRecruitmentResponse[]>(
    []
  );

  const isClient = useClient();

  const useAuthSelector = useAppSelector(selectAuth);

  const { storeValue, setValue } = useLocalStorage("favorites", selectedData);

  const handleLocalStorage = (item: GetRecruitmentResponse) => {
    if (storeValue.length === 0) {
      setValue([item]);
    } else {
      const isAlreadyBookMark = storeValue.findIndex(
        (value: GetRecruitmentResponse) => value._id === item._id
      );
      if (isAlreadyBookMark !== -1) {
        const newValues = storeValue.filter(
          (favorite: GetRecruitmentResponse) => favorite._id !== item._id
        );
        setValue(newValues);
      } else {
        const newValue = [...storeValue, item];
        setValue(newValue);
      }
    }
  };

  const handleBookMark = (item: GetRecruitmentResponse) => {
    if (!useAuthSelector.isLogin) {
      alert("로그인을 해야 즐겨찾기에 등록이 됩니다");
      return;
    }

    handleLocalStorage(item);
  };

  if (!isClient) {
    return;
  }
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
          <HiringCard
            item={item}
            key={item._id}
            // isFavorite={selectedData.includes(item._id)}
            isFavorite={
              storeValue &&
              storeValue.findIndex((select: any) => select._id === item._id) >
                -1 &&
              true
            }
            handleBookMark={handleBookMark}
          />
        ))}
      </section>
      {/*  페이지네이션*/}
      <div></div>
    </div>
  );
}

export default HiringContents;
