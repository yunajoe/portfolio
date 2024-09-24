"use client";

import { useTranslation } from "@/components/language";
import MainNavBar from "@/components/navbar/MainNavBar";
import useClient from "@/hooks/useClient";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Button, Center, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

// 처음 웹에 들어왔을떄의 메인 화면
// 자동 로그인 승인 여부 체크박스 만들기
export default function Home() {
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

  const { t, language } = useTranslation();

  console.log("나는야 현재 언어", language);
  const gotoMyPortPolio = (
    <Button variant="default" onClick={navigateToMyPortPolioPage}>
      나의 포트폴리오 보러가기
    </Button>
  );

  const gotoCreatePortPolio = (
    <Button variant="default" onClick={navigateToLoginPage}>
      포트폴리오 만들러가기
    </Button>
  );

  return (
    <>
      <MainNavBar />
      <Center bg="blue" h="100vh">
        <Stack justify="center" gap="30" w="300px">
          <Button variant="default" onClick={navigateToBoardPage}>
            {/* portpolio보러가기 */}

            {/* {t("home.menu_one")} */}
          </Button>
          {isClient && useAuthSelector.isLogin
            ? gotoMyPortPolio
            : gotoCreatePortPolio}
        </Stack>
      </Center>
    </>
  );
}
