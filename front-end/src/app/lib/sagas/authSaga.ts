"use client";

import { getKaKaoAccessToken, loginLocal, registerLocal } from "@/api/auth";
import {
  loginFail,
  loginSuccess,
  registerFail,
  registerSuccess,
} from "@/src/app/lib/features/auth/authSlice";
import { kakaoLoginUserSaga } from "@/types/authSaga";
import { call, put, takeEvery } from "redux-saga/effects";

function* kakaoLoginUser(action: kakaoLoginUserSaga): any {
  try {
    const result = yield call(getKaKaoAccessToken, action.code);
    console.log("result", result.data);
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

// refresh토큰으로 accessToken

export function* authSaga() {
  yield takeEvery("KAKAO_LOGIN_REQUEST", kakaoLoginUser);
  yield takeEvery("LOCAL_REGISTER_REQUEST", localRegisterUser);
  yield takeEvery("LOCAL_LOGIN_REQUEST", localLoginUser);
}
