"use client";

import Carousel from "@/components/carousel/Carousel";
import { t } from "@/components/language";
import MainNavBar from "@/components/navbar/MainNavBar";
import { TransLationContext } from "@/context/TransLationContext";
import useClient from "@/hooks/useClient";
import useEventListener from "@/hooks/useEventListener";
import useScreen from "@/hooks/useScreen";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { environemnt } from "@/utils/carousel";
import { Button, Stack } from "@mantine/core";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import styles from "./HomeContent.module.scss";

const cx = classNames.bind(styles);
// https://oapi.saramin.co.kr/guide/job-search
const cards = [
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723445221109-cdb5d59db6ca?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 1",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1722009379927-2339f55504d6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 2",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723445203959-abcb24620e16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 3",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723554135138-b0210a75f302?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 4",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723445221109-cdb5d59db6ca?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 5",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723563170880-31474c7ec29c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 6",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1713273791478-18255a8c7143?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8MjJ8fHxlbnwwfHx8fHw%3D",
    title: "Card 7",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723445221109-cdb5d59db6ca?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 8",
    description: "Info which directs to the other page.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1723563170880-31474c7ec29c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Card 9",
    description: "Info which directs to the other page.",
  },
];

export default function HomeContent() {
  const router = useRouter();
  const useAuthSelector = useAppSelector(selectAuth);
  const isClient = useClient();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { screenSize, handleSize } = useScreen();
  useEventListener("resize", handleSize);

  const navigateToMyPortPolioPage = () => {
    router.push("/myportpolio");
  };

  const navigateToLoginPage = () => {
    router.push("/auth/login");
  };

  const navigateToBoardPage = () => {
    router.push("/board");
  };
  // console.log("ScrrenSize", screenSize);

  const { language } = useContext(TransLationContext);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const gotoMyPortPolio = (
    <Button variant="default" onClick={navigateToMyPortPolioPage}>
      {isClient ? t("home.login.menu_one", language) : null}
    </Button>
  );

  const gotoCreatePortPolio = (
    <Button variant="default" onClick={navigateToLoginPage}>
      {isClient ? t("home.menu_two", language) : null}
    </Button>
  );

  return (
    <>
      <MainNavBar />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <Carousel>
            <Carousel.Header
              handlePrev={handlePrev}
              handleNext={handleNext}
            ></Carousel.Header>
            <Carousel.Slide
              data={cards}
              currentIndex={currentIndex}
              environemnt={environemnt(screenSize)}
            ></Carousel.Slide>
          </Carousel>
          <Stack justify="center" w="300px">
            <Button variant="default" onClick={navigateToBoardPage}>
              {isClient ? t("home.menu_one", language) : null}
            </Button>
            {isClient && useAuthSelector.isLogin
              ? gotoMyPortPolio
              : gotoCreatePortPolio}
          </Stack>
        </div>
      </div>
    </>
  );
}
