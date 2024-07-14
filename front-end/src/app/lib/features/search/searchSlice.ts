"use client";
import { RootState } from "@/src/app/lib/store";
import { CompanyItem, MajorItem } from "@/types/api";
import { createSlice, current } from "@reduxjs/toolkit";

type PortPolioState = {
  majorData: MajorItem[];
  companyData: CompanyItem[];
  status: number | null;
};

const initialState: PortPolioState = {
  status: null,
  majorData: [],
  companyData: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getCompanyListSuccess: (state, action) => {
      state.status = 200;
      state.companyData = action.payload;
    },
    getCompanyListFail: (state, action) => {
      return {
        ...initialState,
      };
    },
    getMajorListSuccess: (state, action) => {
      state.status = 200;
      state.majorData = action.payload;
    },
    getMajorListFail: (state, action) => {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  getCompanyListSuccess,
  getCompanyListFail,
  getMajorListSuccess,
  getMajorListFail,
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice;
