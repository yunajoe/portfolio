"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

export type AuthState = {
  isLogin: boolean;
  status: number | null;
  message: string;
  userData: {
    _id: string;
    username: string;
    email: string;
    type: string;
    tokenKeyValue: string;
  };
};

const initialState: AuthState = {
  isLogin: false,
  status: null,
  message: "",
  userData: {
    _id: "",
    username: "",
    email: "",
    type: "",
    tokenKeyValue: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      const { status, message, access_token, refresh_token, user_data } =
        action.payload;
      setCookie("accessToken", access_token);
      setCookie("refreshToken", refresh_token);

      (state.isLogin = true),
        (state.status = status),
        (state.message = message);
      state.userData = user_data;
    },
    registerFail: (state, action) => {
      return {
        ...initialState,
      };
    },

    loginSuccess: (state, action) => {
      const { status, message, access_token, refresh_token, user_data } =
        action.payload;

      if (status === 200) {
        // 로그인성공할때 쿠키저장
        setCookie("accessToken", access_token);
        setCookie("refreshToken", refresh_token);
        (state.isLogin = true),
          (state.status = status),
          (state.message = message);
        state.userData = user_data;
      } else {
        return {
          ...initialState,
          status: action.payload.status,
        };
      }
    },
    loginFail: (state, action) => {
      // status는  payload값으로 안 넘어옴 와이?
      return {
        ...initialState,
      };
    },
  },
});

// 액션
export const { registerSuccess, registerFail, loginSuccess, loginFail } =
  authSlice.actions;

// selectore
export const selectAuth = (state: RootState) => state.auth;

export default authSlice;
