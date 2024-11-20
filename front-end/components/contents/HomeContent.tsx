"use client";

import Carousel from "@/components/carousel/Carousel";
import { t } from "@/components/language";
import { cards } from "@/constant/carousel";
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
  );
}
