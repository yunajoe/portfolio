"use client";
import {
  getUserInfoByUserTableId,
  uploadUserProfileImageQuery,
} from "@/api/user";
import { userProfileImageUpdateSuccess } from "@/src/app/lib/features/auth/authSlice";
import { updateProfileImageStatus } from "@/src/app/lib/features/status/statusSlice";
import {
  getUserInfoFail,
  getUserInfoSuccess,
} from "@/src/app/lib/features/user/userSlice";
import { UpdateProfileImageSaga } from "@/types/userSaga";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserInfoSaga(action: any): any {
  try {
    const data = yield call(getUserInfoByUserTableId, action.users_table_id);
    const result = data.data;
    yield put(getUserInfoSuccess(result));
  } catch (err) {
    yield put(getUserInfoFail());
  }
}

function* updateProfileImageSaga(action: UpdateProfileImageSaga): any {
  try {
    const data = yield call(uploadUserProfileImageQuery, action.formData);
    const result = data.data;
    yield put(updateProfileImageStatus(result));
    yield put(userProfileImageUpdateSuccess(result));
  } catch (err) {}
}

export function* userSaga() {
  yield takeEvery("USER_FIND_BY_USER_TABLE_ID", getUserInfoSaga);
  yield takeEvery("UPDATE_USER_PROFILE_IMAGE", updateProfileImageSaga);
}
