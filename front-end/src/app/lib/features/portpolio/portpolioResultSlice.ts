"use client";
import { Item } from "@/schemas/portfolio";
import { RootState } from "@/src/app/lib/store";

import { createSlice } from "@reduxjs/toolkit";
type PortPolioResultState = {
  current_portpolio_id: string | null;
  _id: string;
  users_table_id: string;
  username: string;
  email: string;
  portpolio_ids: string[];
  type: string;
  portpolio_detail_arr: Item[];
  default_portpolio: Item;
};

const initialState: PortPolioResultState = {
  current_portpolio_id: null,
  // popolist_list request
  _id: "",
  users_table_id: "",
  username: "",
  email: "",
  portpolio_ids: [],
  type: "",

  // getListPortPolioDetail
  portpolio_detail_arr: [],

  // default portpolio
  default_portpolio: {
    _id: "",
    users_table_id: "",
    portpolio_name: "",
    portpolioId: "",
    introText: "",
    careerList: [],
    educationList: [],
    createdAt: "",
    updatedAt: "",
    defaultResume: false,
  },
};

const portPolioResultSlice = createSlice({
  name: "portpolioResult",
  initialState,
  reducers: {
    portpolioCreateSuccess: (state, action) => {
      state.current_portpolio_id = action.payload.key;
    },
    portpolioCreateFail: () => {
      return {
        ...initialState,
      };
    },

    portpolioDetailListSuccess: (state, action) => {
      const { result } = action.payload;
      return {
        ...state,
        portpolio_detail_arr: result,
      };
    },
    portpolioDetailListFail: (state, action) => {
      return initialState;
    },

    getDefaultPortPolioSuccess: (state, action) => {
      state.default_portpolio = action.payload;
    },

    // reset
    getDefaultPortPolioReset: (state) => {
      state.default_portpolio = {
        _id: "",
        users_table_id: "",
        portpolio_name: "",
        portpolioId: "",
        introText: "",
        careerList: [],
        educationList: [],
        createdAt: "",
        updatedAt: "",
        defaultResume: false,
      };
    },
  },
});

export const {
  portpolioCreateSuccess,
  portpolioCreateFail,
  portpolioDetailListSuccess,
  portpolioDetailListFail,
  getDefaultPortPolioSuccess,
  getDefaultPortPolioReset,
} = portPolioResultSlice.actions;

export const selectPortPolioResult = (state: RootState) =>
  state.portpolioResult;

export default portPolioResultSlice;
