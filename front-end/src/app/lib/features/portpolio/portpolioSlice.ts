"use client";
import { RootState } from "@/src/app/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export type CareerType = {
  id: number;
  companyName: string;
  status: string;
  position: string;
  companyDate: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
  isCurrent: false;
};

export type EducationType = {
  id: number;
  schoolName: string;
  major: string;
  schoolDate: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
  isCurrent: false;
};

export type PortPolioState = {
  userTableId: string;
  portpolioId: string;
  portpolioName: string;
  introText: string;
  careerList: CareerType[];
  educationList: EducationType[];
  educationIdNumber: number;
  careerIdNumber: number;
  createdAt: string;
  updatedAt: string;
  defaultResume: boolean;
};

const initialState: PortPolioState = {
  userTableId: "",
  portpolioId: "",
  portpolioName: "",
  introText: "",
  careerList: [],
  educationList: [],
  educationIdNumber: 0,
  careerIdNumber: 0,
  createdAt: "",
  updatedAt: "",
  defaultResume: false,
};

const portPolioSlice = createSlice({
  name: "portpolio",
  initialState,
  reducers: {
    introTextEdit: (state, action) => {
      state.introText = action.payload;
    },

    careerFieldAdd: (state, action) => {
      state.careerIdNumber++;
      const object = {
        id: state.careerIdNumber,
        companyName: action.payload.companyName,
        status: action.payload.status,
        position: action.payload.position,
        companyDate: action.payload.companyDate,
        isCurrent: action.payload.isCurrent,
      };
      state.careerList.unshift(object);
    },

    careerFieldEdit: (state, action) => {
      const ItemIndex = state.careerList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex !== -1) {
        state.careerList[ItemIndex].companyName = action.payload.companyName;
        state.careerList[ItemIndex].status = action.payload.status;
        state.careerList[ItemIndex].position = action.payload.position;
        state.careerList[ItemIndex].companyDate = action.payload.companyDate;
        state.careerList[ItemIndex].isCurrent = action.payload.isCurrent;
      }
    },
    careerFieldDelete: (state, action) => {
      const arr = state.careerList.filter(
        (_, index) => index !== action.payload.index
      );
      state.careerList = arr;
    },

    educationFieldAdd: (state, action) => {
      state.educationIdNumber++;
      const object = {
        id: state.educationIdNumber,
        schoolName: action.payload.schoolName,
        major: action.payload.major,
        schoolDate: action.payload.schoolDate,
        isCurrent: action.payload.isCurrent,
      };
      state.educationList.unshift(object);
    },

    educationFieldEdit: (state, action) => {
      const ItemIndex = state.educationList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex !== -1) {
        state.educationList[ItemIndex].schoolName = action.payload.schoolName;
        state.educationList[ItemIndex].major = action.payload.major;
        state.educationList[ItemIndex].schoolDate = action.payload.schoolDate;
        state.educationList[ItemIndex].isCurrent = action.payload.isCurrent;
      }
    },

    educationFieldDelete: (state, action) => {
      const arr = state.educationList.filter(
        (_, index) => index !== action.payload.index
      );

      state.educationList = arr;
    },

    portpolioDetailSuccess: (state, action) => {
      const {
        _id,
        users_table_id,
        portpolioId,
        portpolio_name,
        introText,
        careerList,
        educationList,
      } = action.payload;

      state.userTableId = users_table_id;

      state.portpolioId = portpolioId;

      state.portpolioName = portpolio_name;
      state.introText = introText;

      if (careerList.length === 0) {
        state.careerList = [];
        state.careerIdNumber = 0;
      } else {
        const lastElement = careerList[careerList.length - 1];
        state.careerIdNumber = lastElement.id;
        state.careerList = careerList;
      }
      if (educationList.length === 0) {
        state.educationList = [];
        state.educationIdNumber = 0;
      } else {
        const lastElement = educationList[educationList.length - 1];
        state.educationIdNumber = lastElement.id;
        state.educationList = educationList;
      }

      state.defaultResume = action.payload.defaultResume;

      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },

    portpolioDetailFail: () => {
      return {
        ...initialState,
      };
    },

    portpolioReset: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  introTextEdit,
  careerFieldAdd,
  careerFieldEdit,
  careerFieldDelete,
  educationFieldAdd,
  educationFieldEdit,
  educationFieldDelete,
  portpolioDetailSuccess,
  portpolioDetailFail,
  portpolioReset,
} = portPolioSlice.actions;

export const selectPortPolio = (state: RootState) => state.portpolio;

export default portPolioSlice;
