"use client";
import { authSaga } from "@/src/app/lib/sagas/authSaga";
import { portPolioSaga } from "@/src/app/lib/sagas/portpolioSaga";
import { userSaga } from "@/src/app/lib/sagas/userSaga";
import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([fork(authSaga), fork(portPolioSaga), fork(userSaga)]);
}

export default rootSaga;
