"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

export type AuthState = {
  isLogin: boolean;
  status: number | null;
  message: string;
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
      return initialState;
    },

    loginSuccess: (state, action) => {
      const { status, message, access_token, refresh_token, user_data } =
        action.payload;

      if (status === 200) {
        setCookie("accessToken", access_token);
        setCookie("refreshToken", refresh_token);
        (state.isLogin = true),
          (state.status = status),
          (state.message = message);
        state.userData = user_data;
      } else {
        return {
          ...initialState,
          status: status,
          message: message,
        };
      }
    },
    loginFail: (state, action) => {
      return initialState;
    },

    logoutSuccess: (state, action) => {
      const { status, message } = action.payload;
      if (status === 200) {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        return {
          ...initialState,
          status: status,
          message: message,
        };
      } else {
        return {
          ...state,
          status: status,
          message: message,
        };
      }
    },
    logoutFail: (state, action) => {},

    userProfileImageUpdateSuccess: (state, action) => {
      const { file } = action.payload;
      state.userData.userprofile = file.filename;
    },

    userNameUpdateSuccess: (state, action) => {
      state.userData.username = action.payload.username;
    },

    withDrawalSuccess: (state, action) => {
      const { status, message } = action.payload;
      if (status === 200) {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        return initialState;
      }
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
  userProfileImageUpdateSuccess,
  userNameUpdateSuccess,
  withDrawalSuccess,
} = authSlice.actions;

// selectore
export const selectAuth = (state: RootState) => state.auth;

export default authSlice;
