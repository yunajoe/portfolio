"use client";

import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Button, Center, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

// 처음 웹에 들어왔을떄의 메인 화면
// 자동 로그인 승인 여부 체크박스 만들기
export default function Home() {
  const router = useRouter();

  const useAuthSelector = useAppSelector(selectAuth);
  const navigateToMyPortPolioPage = () => {
    router.push("/myportpolio");
  };

  const navigateToLoginPage = () => {
    router.push("/auth/login");
  };

  const navigateToBoardPage = () => {
    router.push("/board");
  };

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
    <Center bg="blue" h="100vh">
      <Stack justify="center" gap="30" w="300px">
        <Button variant="default" onClick={navigateToBoardPage}>
          portpolio보러가기
        </Button>
        {useAuthSelector.isLogin ? gotoMyPortPolio : gotoCreatePortPolio}
      </Stack>
    </Center>
  );
}
