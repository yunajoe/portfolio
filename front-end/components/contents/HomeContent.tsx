"use client";

import { t } from "@/components/language";
import MainNavBar from "@/components/navbar/MainNavBar";
import { TransLationContext } from "@/context/TransLationContext";
import useClient from "@/hooks/useClient";
import LeftChevronIcon from "@/public/icons/LeftChevronIcon";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Button, Stack } from "@mantine/core";
import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./HomeContent.module.scss";

const cx = classNames.bind(styles);
// https://oapi.saramin.co.kr/guide/job-search

export default function HomeContent() {
  const router = useRouter();
  const useAuthSelector = useAppSelector(selectAuth);
  const isClient = useClient();
  const navigateToMyPortPolioPage = () => {
    router.push("/myportpolio");
  };

  const navigateToLoginPage = () => {
    router.push("/auth/login");
  };

  const navigateToBoardPage = () => {
    router.push("/board");
  };

  const { language, setLanguage } = useContext(TransLationContext);

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
        {/* <Center bg="blue" h="100vh" w="100vw"> */}
        <div className={cx("container")}>
          <div className={cx("carousel")}>
            {/* carousel header */}
            <div className={cx("carousel_header")}>
              <h4 className={cx("title")}>내가 관심있을 만한 포지션</h4>
              <div className={cx("arrow_container")}>
                {/* <a>전체보기</a> */}
                {/* <Link></Link> */}
                <Link href="" style={{ textDecoration: "none" }}>
                  전체보기
                </Link>
                <div className={cx("button_container")}>
                  <button className={cx("button")}>
                    <LeftChevronIcon />
                  </button>
                  <button className={cx("button")}>
                    <RightChevronIcon />
                  </button>
                </div>
              </div>
            </div>
            {/* carousel */}
            <div className={cx("carousel_slide")}>
              <div></div>
            </div>
          </div>
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
      {/* </Center> */}
    </>
  );
}
