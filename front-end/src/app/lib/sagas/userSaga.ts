"use client";
import {
  getUserInfoByUserObjectId,
  getUserInfoByUserTableId,
  updateUserName,
  updateUserPassword,
  uploadUserProfileImage,
} from "@/api/user";
import {
  userNameUpdateSuccess,
  userProfileImageUpdateSuccess,
} from "@/src/app/lib/features/auth/authSlice";
import {
  updateProfileImageStatus,
  updateUserNickNameStatus,
  updateUserPasswordStatus,
} from "@/src/app/lib/features/status/statusSlice";
import {
  getUserInfoFail,
  getUserInfoSuccess,
} from "@/src/app/lib/features/user/userSlice";
import {
  GetUserInfoByObjectIdSaga,
  GetUserInfoByUserTableIdSaga,
  UpdateProfileImageSaga,
  UpdateUserNameSaga,
  UpdateUserPasswordSaga,
} from "@/types/userSaga";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserInfoByObjectIdSaga(action: GetUserInfoByObjectIdSaga): any {
  try {
    const data = yield call(getUserInfoByUserObjectId, action._id);
    const result = data.data;
    yield put(userNameUpdateSuccess(result.userInfo));
  } catch (err) {}
}

function* getUserInfoByUserTableIdSaga(
  action: GetUserInfoByUserTableIdSaga
): any {
  try {
    const data = yield call(getUserInfoByUserTableId, action.users_table_id);
    const result = data.data;
    console.log("result", result);
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
    // yield put(userNameUpdateSuccess(action.username));
  } catch (err) {}
}

function* updateUserPasswordSaga(action: UpdateUserPasswordSaga): any {
  try {
    const data = yield call(updateUserPassword, action);
    const result = data.data;
    yield put(updateUserPasswordStatus(result));
  } catch (err) {}
}

export function* userSaga() {
  yield takeEvery("USER_FIND_BY_OBJECT_ID", getUserInfoByObjectIdSaga);
  yield takeEvery("USER_FIND_BY_USER_TABLE_ID", getUserInfoByUserTableIdSaga);
  yield takeEvery("UPDATE_USER_PROFILE_IMAGE", updateProfileImageSaga);
  yield takeEvery("UPDATE_USER_NAME", updateUserNameSaga);
  yield takeEvery("UPDATE_USER_PASSWORD", updateUserPasswordSaga);
}
