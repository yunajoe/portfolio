"use client";
import { all, fork } from "redux-saga/effects";
import { authSaga } from "@/src/app/lib/sagas/authSaga";
import { portPolioSaga } from "@/src/app/lib/sagas/portpolioSaga";
import { userSaga } from "@/src/app/lib/sagas/userSaga";

// all은 sage를 병령로 사용할때 사용
function* rootSaga() {
  yield all([fork(authSaga), fork(portPolioSaga), fork(userSaga)]);
}

export default rootSaga;
