"use client";
import {
  getUserInfoByUserObjectId,
  getUserInfoByUserTableId,
  updateUserName,
  uploadUserProfileImage,
} from "@/api/user";
import {
  userNameUpdateSuccess,
  userProfileImageUpdateSuccess,
} from "@/src/app/lib/features/auth/authSlice";
import {
  updateProfileImageStatus,
  updateUserNickNameStatus,
} from "@/src/app/lib/features/status/statusSlice";
import {
  getUserInfoFail,
  getUserInfoSuccess,
} from "@/src/app/lib/features/user/userSlice";
import {
  GetUserInfoByObjectIdSaga,
  UpdateProfileImageSaga,
  UpdateUserNameSaga,
} from "@/types/userSaga";
import { call, put, takeEvery } from "redux-saga/effects";
// getUserInfoByUserObjectId

function* getUserInfoByObjectIdSaga(action: GetUserInfoByObjectIdSaga): any {
  try {
    const data = yield call(getUserInfoByUserObjectId, action._id);
    const result = data.data;
    yield put(userNameUpdateSuccess(result.userInfo));
  } catch (err) {}
}

function* getUserInfoByUserTableIdSaga(action: any): any {
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
    const data = yield call(uploadUserProfileImage, action.formData);
    const result = data.data;
    yield put(updateProfileImageStatus(result));
    yield put(userProfileImageUpdateSuccess(result));
  } catch (err) {}
}

function* updateUserNameSaga(action: UpdateUserNameSaga): any {
  try {
    const data = yield call(updateUserName, action);
    const result = data.data;
    yield put(updateUserNickNameStatus(result));
  } catch (err) {}
}

export function* userSaga() {
  yield takeEvery("USER_FIND_BY_OBJECT_ID", getUserInfoByObjectIdSaga);
  yield takeEvery("USER_FIND_BY_USER_TABLE_ID", getUserInfoByUserTableIdSaga);
  yield takeEvery("UPDATE_USER_PROFILE_IMAGE", updateProfileImageSaga);
  yield takeEvery("UPDATE_USER_NAME", updateUserNameSaga);
}
