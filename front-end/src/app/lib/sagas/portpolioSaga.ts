"use client";

import {
  createPortPolio,
  deletePortPolio,
  getDetailPortPolio,
  getListPortPolioDetail,
  getPortPolioList,
  savePortPolio,
  updateDefaultPortPolio,
  updatePortPolioName,
} from "@/api/portpolio";
import {
  portpolioCreateFail,
  portpolioCreateSuccess,
  portpolioDetailListFail,
  portpolioDetailListSuccess,
  portpolioListFail,
  portpolioListSuccess,
} from "@/src/app/lib/features/portpolio/portpolioResultSlice";

import {
  portpolioDetailFail,
  portpolioDetailSuccess,
} from "@/src/app/lib/features/portpolio/portpolioSlice";

import {
  accessTokenStatus,
  defaultPortPolioStatus,
  deletePortPolioStatus,
  savePortPolioStatus,
  updatePortPolioNameStatus,
} from "@/src/app/lib/features/status/statusSlice";
import {
  DeletePortPolioSaga,
  GetPortPolioDetailListSaga,
  SavePortPolioSaga,
  UpdateDefaultPortPolioSaga,
  UpdatePortPolioNameSaga,
} from "@/types/portpolioSaga";
import { call, put, takeEvery } from "redux-saga/effects";

function* getPortPolioListSaga(action: any): any {
  try {
    const data = yield call(getPortPolioList, action);
    const result = data.data;
    if (result.status === 200) {
      yield put(portpolioListSuccess(result.result));
    } else {
      yield put(accessTokenStatus(result));
    }
  } catch (err) {
    yield put(portpolioListFail());
  }
}

function* getPortPolioDetailListSaga(action: GetPortPolioDetailListSaga): any {
  try {
    const data = yield call(getListPortPolioDetail, action.users_table_id);
    const result = data.data;

    yield put(portpolioDetailListSuccess(result));
  } catch (err) {
    yield put(portpolioDetailListFail());
  }
}

function* createPortPolioSaga(action: any): any {
  try {
    const data = yield call(createPortPolio, action.accessToken);
    const result = data.data;
    yield put(portpolioCreateSuccess(result));
  } catch (err) {
    yield put(portpolioCreateFail());
  }
}

function* savePortPolioSaga(action: SavePortPolioSaga): any {
  try {
    const data = yield call(savePortPolio, action);
    const result = data.data;
    yield put(savePortPolioStatus(result));
  } catch (err) {}
}

function* getPortPolioDetailSaga(action: any): any {
  try {
    const data = yield call(getDetailPortPolio, action.portpolioId);
    const result = data.data;
    yield put(portpolioDetailSuccess(result));
  } catch (err) {
    yield put(portpolioDetailFail());
  }
}

function* deletePortPolioSaga(action: DeletePortPolioSaga): any {
  try {
    const data = yield call(deletePortPolio, action);
    const result = data.data;
    yield put(deletePortPolioStatus(result));
  } catch (err) {}
}

function* updateDefaultPortPolioSaga(action: UpdateDefaultPortPolioSaga): any {
  try {
    const data = yield call(updateDefaultPortPolio, action);
    const result = data.data;
    yield put(defaultPortPolioStatus(result));
  } catch (err) {}
}

function* updatePortPolioNameSaga(action: UpdatePortPolioNameSaga): any {
  try {
    const data = yield call(updatePortPolioName, action);
    const result = data.data;
    yield put(updatePortPolioNameStatus(result));
  } catch (err) {}
}

export function* portPolioSaga() {
  yield takeEvery("GET_PORT_POLIO_LIST_REQUEST", getPortPolioListSaga);
  yield takeEvery("GET_PORT_POLIO_DETAIL_REQUEST", getPortPolioDetailSaga);

  yield takeEvery(
    "GET_PORT_POLIO_DETAIL_LIST_REQUEST",
    getPortPolioDetailListSaga
  );
  yield takeEvery("CREATE_PORT_POLIO_REQUEST", createPortPolioSaga);
  yield takeEvery("SAVE_PORT_POLIO_REQUEST", savePortPolioSaga);
  yield takeEvery("DELETE_PORT_POLIO_REQUEST", deletePortPolioSaga);
  yield takeEvery(
    "UPDATE_DEFAULT_PORT_POLIO_REQUEST",
    updateDefaultPortPolioSaga
  );
  yield takeEvery("UPDATE_PORT_POLIO_NAME_REQUEST", updatePortPolioNameSaga);
}
