"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

export type AuthState = {
  isLogin: boolean;
  status: number | null;
  message: string;
  logoutStatus: number | null;
  logoutMessage: string;
  userData: {
    _id: string;
    id: number;
    username: string;
    userprofile: string;
    email: string;
    password: string;
    type: string;
    tokenKeyValue: string;
    accessToken: string;
    refreshToken: string;
  };
};

const initialState: AuthState = {
  isLogin: false,
  status: null,
  message: "",
  logoutStatus: null,
  logoutMessage: "",
  userData: {
    _id: "",
    id: 0,
    username: "",
    userprofile: "",
    email: "",
    password: "",
    type: "",
    tokenKeyValue: "",
    accessToken: "",
    refreshToken: "",
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
      const { status, message } = action.payload;
      return {
        ...initialState,
        status,
        message,
      };
    },

    loginSuccess: (state, action) => {
      const { status, message, access_token, refresh_token, user_data } =
        action.payload;

      setCookie("accessToken", access_token);
      setCookie("refreshToken", refresh_token);
      (state.isLogin = true),
        (state.status = status),
        (state.message = message);
      state.userData = user_data;
    },
    loginFail: (state, action) => {
      const { status, message } = action.payload;
      return {
        ...initialState,
        status,
        message,
      };
    },

    logoutSuccess: (state, action) => {
      const { status, message } = action.payload;
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      return {
        ...initialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    },
    logoutFail: (state, action) => {
      const { status, message } = action.payload;
      return {
        ...initialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    },
    withDrawalSuccess: (state, action) => {
      // const { status, message } = action.payload;
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      return initialState;
    },
    withDrawalFail: (state, action) => {
      // const { status, message } = action.payload;
      return {
        ...state,
      };
    },

    userProfileImageUpdateSuccess: (state, action) => {
      const { file } = action.payload;
      state.userData.userprofile = file.filename;
    },

    userNameUpdateSuccess: (state, action) => {
      state.userData.username = action.payload.username;
    },

    authReset: () => {
      return initialState;
    },
  },
});

// 액션
export const {
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  withDrawalSuccess,
  withDrawalFail,
  userProfileImageUpdateSuccess,
  userNameUpdateSuccess,
  authReset,
} = authSlice.actions;

// selectore
export const selectAuth = (state: RootState) => state.auth;

export default authSlice;
