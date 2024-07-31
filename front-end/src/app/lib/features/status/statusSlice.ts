"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

type StatusState = {
  accessTokenStatus: number | null;
  accessTokenMessage: string;
  refreshTokenStatus: number | null;
  refreshTokenMessage: string;

  // portpolio
  portpolioListStatus: number | null;
  portpolioListMessage: string;
  portpolioDetailStatus: number | null;
  portpolioDetailMessage: string;

  defaultPortPolioStatus: number | null;
  defaultPortPolioMessage: string;
  updatePortPolioNameStatus: number | null;
  updatePortPolioNameMessage: string;
  savePortPolioStatus: number | null;
  savePortPolioMessage: string;
  deletePortPolioStatus: number | null;
  deletePortPolioMessage: string;

  // updateProfileImage
  updateProfileImageStatus: number | null;
  updateProfileImageMessage: string;

  // updateProfileName
  updateUserNickNameStatus: number | null;
  updateUserNickNameMessage: string;

  // checkPassword
  updateUserPasswordStatus: number | null;
  updateUserPasswordMessage: string;

  // delete user
  deleteUserStatus: number | null;
  deleteUserMessage: string;
};

const initialState: StatusState = {
  accessTokenStatus: null,
  accessTokenMessage: "",
  refreshTokenStatus: null,
  refreshTokenMessage: "",

  // porpolio
  portpolioListStatus: null,
  portpolioListMessage: "",
  portpolioDetailStatus: null,
  portpolioDetailMessage: "",

  defaultPortPolioStatus: null,
  defaultPortPolioMessage: "",
  updatePortPolioNameStatus: null,
  updatePortPolioNameMessage: "",
  savePortPolioStatus: null,
  savePortPolioMessage: "",
  deletePortPolioStatus: null,
  deletePortPolioMessage: "",

  updateProfileImageStatus: null,
  updateProfileImageMessage: "",
  updateUserNickNameStatus: null,
  updateUserNickNameMessage: "",
  updateUserPasswordStatus: null,
  updateUserPasswordMessage: "",
  deleteUserStatus: null,
  deleteUserMessage: "",
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
    portpolioListStatus: (state, action) => {
      const { status, message } = action.payload;
      state.portpolioListStatus = status;
      state.portpolioListMessage = message;
    },
    portpolioDetailStatus: (state, action) => {
      const { status, message } = action.payload;
      state.portpolioDetailStatus = status;
      state.portpolioDetailMessage = message;
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

    updateProfileImageStatus: (state, action) => {
      const { status, message } = action.payload;
      state.updateProfileImageStatus = status;
      state.updateProfileImageMessage = message;
    },
    updateUserNickNameStatus: (state, action) => {
      const { status, message } = action.payload;
      state.updateUserNickNameStatus = status;
      state.updateUserNickNameMessage = message;
    },

    updateUserPasswordStatus: (state, action) => {
      const { status, message } = action.payload;
      state.updateUserPasswordStatus = status;
      state.updateUserPasswordMessage = message;
    },

    deleteUserStatus: (state, action) => {
      const { status, message } = action.payload;
      state.deleteUserStatus = status;
      state.deleteUserMessage = message;
    },

    // reset
    deletePortPolioStatusReset: (state) => {
      state.deletePortPolioStatus = null;
      state.deletePortPolioMessage = "";
    },

    defaultPortPolioReset: (state) => {
      state.defaultPortPolioStatus = null;
      state.defaultPortPolioMessage = "";
    },

    updateProfileImageStatusReset: (state) => {
      state.updateProfileImageStatus = null;
      state.updateProfileImageMessage = "";
    },

    updateUserNickNameStatusReset: (state) => {
      state.updateUserNickNameStatus = null;
      state.updateUserNickNameMessage = "";
    },
    updatePortPolioNameStatusReset: (state) => {
      state.updatePortPolioNameStatus = null;
      state.updatePortPolioNameMessage = "";
    },

    updateUserPasswordStatusReset: (state) => {
      state.updateUserPasswordStatus = null;
      state.updateUserPasswordMessage = "";
    },
    deleteUserStatusReset: (state) => {
      (state.deleteUserStatus = null), (state.deleteUserMessage = "");
    },
  },
});

// 액션
export const {
  accessTokenStatus,
  refreshTokenStatus,

  // porpolio
  portpolioListStatus,
  portpolioDetailStatus,
  updatePortPolioNameStatus,
  savePortPolioStatus,
  deletePortPolioStatus,
  defaultPortPolioStatus,

  updateProfileImageStatus,
  updateUserNickNameStatus,
  updateUserPasswordStatus,
  deleteUserStatus,

  // reset
  defaultPortPolioReset,
  deletePortPolioStatusReset,
  updateUserNickNameStatusReset,
  updatePortPolioNameStatusReset,
  updateUserPasswordStatusReset,
  updateProfileImageStatusReset,
  deleteUserStatusReset,
} = statusSlice.actions;

// selectore
export const selectStatus = (state: RootState) => state.status;

export default statusSlice;
