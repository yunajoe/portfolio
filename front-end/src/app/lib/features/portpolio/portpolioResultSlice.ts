"use client";
import { RootState } from "@/src/app/lib/store";
import { Item } from "@/types/portpolio";
import { createSlice } from "@reduxjs/toolkit";
type PortPolioResultState = {
  //
  current_portpolio_id: string | null;
  // portpolio_list_request
  _id: string;
  users_table_id: string;
  username: string;
  email: string;
  portpolio_ids: string[];
  type: string;
  // portpolio_detail_request
  portpolio_detail_arr: Item[];

  // default poporlio
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
    // 포폴 생성 성공여부
    portpolioCreateSuccess: (state, action) => {
      state.current_portpolio_id = action.payload.key;
    },
    portpolioCreateFail: () => {
      return {
        ...initialState,
      };
    },

    // 포폴 읽기 성공 여부..
    // portpolioListSuccess: (state, action) => {
    //   const { _id, users_table_id, username, email, portpolio_ids, type } =
    //     action.payload[0];
    //   return {
    //     ...state,
    //     _id: _id,
    //     username: username,
    //     email: email,
    //     users_table_id: users_table_id,
    //     portpolio_ids: portpolio_ids,
    //     type: type,
    //   };
    // },
    // portpolioListFail: () => {
    //   return {
    //     ...initialState,
    //   };
    // },

    portpolioDetailListSuccess: (state, action) => {
      const { status, message, result } = action.payload;
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
  // portpolioListSuccess,
  // portpolioListFail,
  portpolioDetailListSuccess,
  portpolioDetailListFail,
  getDefaultPortPolioSuccess,
  getDefaultPortPolioReset,
} = portPolioResultSlice.actions;

export const selectPortPolioResult = (state: RootState) =>
  state.portpolioResult;

export default portPolioResultSlice;
