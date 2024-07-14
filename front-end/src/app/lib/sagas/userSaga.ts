"use client";
import { getUserInfoByUserTableId } from "@/api/user";
import {
  getUserInfoSuccess,
  getUserInfoFail,
} from "@/src/app/lib/features/user/userSlice";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserInfo(action: any): any {
  try {
    const data = yield call(getUserInfoByUserTableId, action.users_table_id);
    const result = data.data;
    yield put(getUserInfoSuccess(result));
  } catch (err) {
    yield put(getUserInfoFail());
  }
}

export function* userSaga() {
  yield takeEvery("USER_FIND_BY_USER_TABLE_ID", getUserInfo);
}
