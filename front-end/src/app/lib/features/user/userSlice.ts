"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";

type UserInfoState = {
  data: {
    id: string;
    user_table_id: string;
    username: string;
    email: string;
    type: string;
  };
  status: number | null;
};

const initialState: UserInfoState = {
  data: {
    id: "",
    user_table_id: "",
    username: "",
    email: "",
    type: "",
  },
  status: null,
};

// unshift나 push나 똑같은 이유는?
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfoSuccess: (state, action) => {
      state.status = action.payload.status;
      state.data = action.payload.result;
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
