"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

type StatusState = {
  accessTokenStatus: number | null;
  accessTokenMessage: string;
  refreshTokenStatus: number | null;
  refreshTokenMessage: string;
  defaultPortPolioStatus: number | null;
  defaultPortPolioMessage: string;
  updatePortPolioNameStatus: number | null;
  updatePortPolioNameMessage: string;
  savePortPolioStatus: number | null;
  savePortPolioMessage: string;
  deletePortPolioStatus: number | null;
  deletePortPolioMessage: string;

  // logout
  logOutStatus: number | null;
  logOutMessage: string;
};

const initialState: StatusState = {
  accessTokenStatus: null,
  accessTokenMessage: "",
  refreshTokenStatus: null,
  refreshTokenMessage: "",
  defaultPortPolioStatus: null,
  defaultPortPolioMessage: "",
  updatePortPolioNameStatus: null,
  updatePortPolioNameMessage: "",
  savePortPolioStatus: null,
  savePortPolioMessage: "",
  deletePortPolioStatus: null,
  deletePortPolioMessage: "",
  logOutStatus: null,
  logOutMessage: "",
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    accessTokenStatus: (state, action) => {
      const { status, message } = action.payload;
      state.accessTokenStatus = status;
      state.accessTokenMessage = message;
    },
    refreshTokenStatus: (state, action) => {
      const { status, message, accessToken, refreshToken } = action.payload;
      if (status === 200) {
        setCookie("accessToken", accessToken);
      } else if (status === 402) {
        deleteCookie("accessToken", accessToken);
        deleteCookie("refreshToken", refreshToken);
      }
      state.refreshTokenStatus = status;
      state.refreshTokenMessage = message;
    },
    deletePortPolioStatus: (state, action) => {
      const { status, message } = action.payload;
      state.deletePortPolioStatus = status;
      state.deletePortPolioMessage = message;
    },
    savePortPolioStatus: (state, action) => {
      const { status, message } = action.payload;
      state.savePortPolioStatus = status;
      state.savePortPolioMessage = message;
    },
    updatePortPolioNameStatus: (state, action) => {
      const { status, message } = action.payload;
      state.updatePortPolioNameStatus = status;
      state.updatePortPolioNameMessage = message;
    },

    defaultPortPolioStatus: (state, action) => {
      const { status, message } = action.payload;
      state.defaultPortPolioStatus = status;
      state.defaultPortPolioMessage = message;
    },

    // logout
    logOutStatus: (state, action) => {
      const { status, message } = action.payload;
      state.logOutStatus = status;
      state.logOutMessage = message;
    },
    // reset
    defaultPortPolioReset: (state) => {
      state.defaultPortPolioStatus = null;
      state.defaultPortPolioMessage = "";
    },
    updatePortPolioNameStatusReset: (state) => {
      state.updatePortPolioNameStatus = null;
      state.updatePortPolioNameMessage = "";
    },

    logOutStatusReset: (state) => {
      state.logOutStatus = null;
      state.logOutMessage = "";
    },
  },
});

// 액션
export const {
  accessTokenStatus,
  refreshTokenStatus,
  updatePortPolioNameStatus,
  savePortPolioStatus,
  deletePortPolioStatus,
  defaultPortPolioStatus,
  logOutStatus,
  defaultPortPolioReset,
  updatePortPolioNameStatusReset,
  logOutStatusReset,
} = statusSlice.actions;

// selectore
export const selectStatus = (state: RootState) => state.status;

export default statusSlice;
