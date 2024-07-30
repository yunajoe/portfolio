"use client";

import { getAuthCode } from "@/utils/kakaoAuthApi";
import { demoProps } from "@/utils/props";
import { Button, Divider, Stack } from "@mantine/core";

import SignForm from "@/components/form/SignForm";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LoginPage() {
  const [gotoRegister, setGotoRegister] = useState(false);

  const router = useRouter();

  const useAuthSelector = useAppSelector(selectAuth);
  console.log("login/auth페이지입니다", useAuthSelector);

  const handleKaKaoButton = async () => {
    window.location.href = getAuthCode;
  };

  useEffect(() => {
    if (useAuthSelector.isLogin) {
      router.push("/");
    }
  }, [useAuthSelector.isLogin]);

  return (
    <Stack {...demoProps}>
      <Stack>
        <Button w="300">Sign in with Google</Button>
        <Button w="300" onClick={handleKaKaoButton}>
          Sign in with KaKao
        </Button>
        <Divider my="sm" w="300" />
      </Stack>
      {!gotoRegister ? (
        <SignForm
          type="login"
          emailLabel="email address"
          passwordLabel="password"
          buttonText="로그인하기"
          gotoRegister={gotoRegister}
          setGotoRegister={setGotoRegister}
        />
      ) : (
        <SignForm
          type="register"
          emailLabel="email address"
          passwordLabel="create password"
          buttonText="회원가입하기"
          gotoRegister={gotoRegister}
          setGotoRegister={setGotoRegister}
        />
      )}
    </Stack>
  );
}

export default LoginPage;
