"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";

type UserInfoState = {
  data: {
    accessToken: string;
    email: string;
    id: number | null;
    password: string;
    refreshToken: string;
    tokenKeyValue: string;
    type: string; // "Local"과 같은 특정 문자열 값을 원할 경우, literal type으로도 정의 가능
    username: string;
    userprofile: string;
    _id: string;
  };
  status: number | null;
};

const initialState: UserInfoState = {
  data: {
    accessToken: "",
    email: "",
    id: null,
    password: "",
    refreshToken: "",
    tokenKeyValue: "",
    type: "", // "Local"과 같은 특정 문자열 값을 원할 경우, literal type으로도 정의 가능
    username: "",
    userprofile: "",
    _id: "",
  },
  status: null,
};

// unshift나 push나 똑같은 이유는?
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfoSuccess: (state, action) => {
      console.log("action", action.payload);
      state.status = action.payload.status;
      state.data = action.payload.userInfo;
    },
    getUserInfoFail: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { getUserInfoSuccess, getUserInfoFail } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice;
