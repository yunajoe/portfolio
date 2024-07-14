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
    portpolioListSuccess: (state, action) => {
      const { _id, users_table_id, username, email, portpolio_ids, type } =
        action.payload[0];
      return {
        ...state,
        _id: _id,
        username: username,
        email: email,
        users_table_id: users_table_id,
        portpolio_ids: portpolio_ids,
        type: type,
      };
    },
    portpolioListFail: () => {
      return {
        ...initialState,
      };
    },

    portpolioDetailListSuccess: (state, action) => {
      return {
        ...state,
        portpolio_detail_arr: action.payload,
      };
    },
    portpolioDetailListFail: () => {
      return {
        ...initialState,
      };
    },

    //  포폴저장 성공 여부
    // portpolioSaveSuccess: (state, action) => {
    //   console.log("actopn", action.payload);
    //   const { data, status } = action.payload;
    //   const { portpolioId } = data;

    //   const updatePortfolios = state.portpolio_detail_arr.map((item) => {
    //     if (item.portpolioId === portpolioId) {
    //       return {
    //         ...item,
    //         introText: data.introText,
    //         careerList: data.careerList,
    //         educationList: data.educationList,
    //       };
    //     }
    //     return item;
    //   });

    //   return {
    //     ...state,
    //     portpolio_detail_arr: updatePortfolios,
    //   };
    // },
    portpolioSaveFail: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  portpolioCreateSuccess,
  portpolioCreateFail,
  portpolioListSuccess,
  portpolioListFail,
  portpolioDetailListSuccess,
  portpolioDetailListFail,
  // portpolioSaveSuccess,
  portpolioSaveFail,
} = portPolioResultSlice.actions;

export const selectPortPolioResult = (state: RootState) =>
  state.portpolioResult;

export default portPolioResultSlice;
