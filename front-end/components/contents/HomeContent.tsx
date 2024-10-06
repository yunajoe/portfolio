"use client";

import { t } from "@/components/language";
import MainNavBar from "@/components/navbar/MainNavBar";
import { TransLationContext } from "@/context/TransLationContext";
import useClient from "@/hooks/useClient";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Button, Center, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useContext } from "react";

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
  console.log("language", language);

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
      <Center bg="blue" h="100vh">
        <Stack justify="center" gap="30" w="300px">
          <Button variant="default" onClick={navigateToBoardPage}>
            {isClient ? t("home.menu_one", language) : null}
          </Button>
          {isClient && useAuthSelector.isLogin
            ? gotoMyPortPolio
            : gotoCreatePortPolio}
        </Stack>
      </Center>
    </>
  );
}
