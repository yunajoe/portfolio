"use client";

import { loginSuccess } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { ReactNode, useEffect } from "react";

type AutoLoginProvider = {
  children: ReactNode;
  user: any;
};

function AutoLoginProvider({ children, user }: AutoLoginProvider) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(loginSuccess(user));
    }
  }, []);

  return children;
}

export default AutoLoginProvider;
