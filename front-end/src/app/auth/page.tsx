"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import Loading from "@/src/app/loading";
import { useRouter } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const useAuthSelector = useAppSelector(selectAuth);

  const passTheCodeToServer = () => {
    if (useAuthSelector.isLogin) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (code !== null) {
      dispatch({ type: "KAKAO_LOGIN_REQUEST", code: code });
    }
  }, []);

  useEffect(() => {
    passTheCodeToServer();
  }, [useAuthSelector.isLogin]);

  return (
    <div>
      <Loading />
    </div>
  );
}

export default Page;
