"use client";

import {
  getKaKaoAccessToken,
  loginLocal,
  logout,
  registerLocal,
} from "@/api/auth";
import {
  loginFail,
  loginSuccess,
  logoutSuccess,
  registerFail,
  registerSuccess,
} from "@/src/app/lib/features/auth/authSlice";
import { logOutStatus } from "@/src/app/lib/features/status/statusSlice";
import { KaKaoLoginUserSaga, LogoutUserSaga } from "@/types/authSaga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* kakaoLoginUser(action: KaKaoLoginUserSaga): any {
  try {
    const result = yield call(getKaKaoAccessToken, action.code);
    yield put(loginSuccess(result.data));
  } catch (err) {
    yield put(loginFail(err));
  }
}

// 일반으로 회원가입할떄
function* localRegisterUser(action: any): any {
  try {
    const result = yield call(registerLocal, action);
    yield put(registerSuccess(result.data));
  } catch (err) {
    yield put(registerFail(err));
  }
}

function* localLoginUser(action: any): any {
  try {
    const result = yield call(loginLocal, action);
    yield put(loginSuccess(result.data));
  } catch (err) {
    yield put(loginFail(err));
  }
}

function* logoutUser(action: LogoutUserSaga): any {
  try {
    const result = yield call(logout, action);
    yield put(logoutSuccess(result.data));
    yield put(logOutStatus(result.data));  
  } catch (err) {}
}

// refresh토큰으로 accessToken

export function* authSaga() {
  yield takeEvery("KAKAO_LOGIN_REQUEST", kakaoLoginUser);
  yield takeEvery("LOCAL_REGISTER_REQUEST", localRegisterUser);
  yield takeEvery("LOCAL_LOGIN_REQUEST", localLoginUser);
  yield takeLatest("LOGOUT_REQUEST", logoutUser);
}
