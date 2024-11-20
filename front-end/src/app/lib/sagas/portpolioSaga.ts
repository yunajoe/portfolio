"use client";

import {
  createPortPolio,
  deletePortPolio,
  getDetailPortPolio,
  getPortPolioDetailList,
  getUserDefaultPortPolio,
  savePortPolio,
  updateDefaultPortPolio,
  updatePortPolioIds,
  updatePortPolioName,
} from "@/api/actions/portfolio";
import {
  getDefaultPortPolioSuccess,
  portpolioCreateFail,
  portpolioCreateSuccess,
  portpolioDetailListFail,
  portpolioDetailListSuccess,
} from "@/src/app/lib/features/portpolio/portpolioResultSlice";

import {
  portpolioDetailFail,
  portpolioDetailSuccess,
} from "@/src/app/lib/features/portpolio/portpolioSlice";

import {
  defaultPortPolioStatus,
  deletePortPolioStatus,
  portpolioDetailStatus,
  portpolioListStatus,
  savePortPolioStatus,
  updatePortPolioNameStatus,
} from "@/src/app/lib/features/status/statusSlice";
import {
  CreatePortPolioSaga,
  DeletePortPolioSaga,
  GetPortPolioDefaultSaga,
  GetPortPolioDetailListSaga,
  GetPortPolioDetailSaga,
  SavePortPolioSaga,
  UpdateDefaultPortPolioSaga,
  UpdatePortPolioIdsSaga,
  UpdatePortPolioNameSaga,
} from "@/types/portpolioSaga";
import { call, put, takeEvery } from "redux-saga/effects";

function* getPortPolioDetailListSaga(action: GetPortPolioDetailListSaga): any {
  try {
    const data = yield call(getPortPolioDetailList, action);
    const result = data.data;
    yield put(portpolioDetailListSuccess(result));
    yield put(portpolioListStatus(result));
  } catch (error: any) {
    yield put(portpolioDetailListFail(error.data));
    yield put(portpolioListStatus(error.data));
  }
}
function* getPortPolioDetailSaga(action: GetPortPolioDetailSaga): any {
  try {
    const data = yield call(getDetailPortPolio, action.portpolioId);
    const result = data.data;
    yield put(portpolioDetailSuccess(result.result));
    yield put(portpolioDetailStatus(result));
  } catch (error: any) {
    yield put(portpolioDetailFail());
    yield put(portpolioDetailStatus(error.data));
  }
}

function* getDefaultPortPolioSaga(action: GetPortPolioDefaultSaga): any {
  try {
    const data = yield call(getUserDefaultPortPolio, action._id);
    const result = data.data;
    yield put(getDefaultPortPolioSuccess(result.result));
  } catch (err) {}
}

function* createPortPolioSaga(action: CreatePortPolioSaga): any {
  try {
    const data = yield call(createPortPolio);
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
  } catch (error: any) {
    yield put(savePortPolioStatus(error.data));
  }
}

function* deletePortPolioSaga(action: DeletePortPolioSaga): any {
  try {
    const data = yield call(deletePortPolio, action);
    const result = data.data;
    yield put(deletePortPolioStatus(result));
  } catch (error: any) {
    yield put(deletePortPolioStatus(error.data));
  }
}

function* updateDefaultPortPolioSaga(action: UpdateDefaultPortPolioSaga): any {
  try {
    const data = yield call(updateDefaultPortPolio, action);
    const result = data.data;
    yield put(defaultPortPolioStatus(result));
  } catch (error: any) {
    yield put(defaultPortPolioStatus(error.data));
  }
}

function* updatePortPolioNameSaga(action: UpdatePortPolioNameSaga): any {
  try {
    const data = yield call(updatePortPolioName, action);
    const result = data.data;
    yield put(updatePortPolioNameStatus(result));
  } catch (error: any) {
    yield put(updatePortPolioNameStatus(error.data));
  }
}

function* updatePortPolioIdsSaga(action: UpdatePortPolioIdsSaga): any {
  try {
    const data = yield call(updatePortPolioIds, action);
    const result = data.data;
    yield put(portpolioDetailListSuccess(result));
    yield put(portpolioListStatus(result));
  } catch (error: any) {}
}

export function* portPolioSaga() {
  yield takeEvery(
    "GET_PORT_POLIO_DETAIL_LIST_REQUEST",
    getPortPolioDetailListSaga
  );
  yield takeEvery("GET_PORT_POLIO_DETAIL_REQUEST", getPortPolioDetailSaga);

  yield takeEvery("GET_PORT_POLIO_DEFAULT_REQUEST", getDefaultPortPolioSaga);
  yield takeEvery("CREATE_PORT_POLIO_REQUEST", createPortPolioSaga);
  yield takeEvery("SAVE_PORT_POLIO_REQUEST", savePortPolioSaga);
  yield takeEvery("DELETE_PORT_POLIO_REQUEST", deletePortPolioSaga);
  yield takeEvery(
    "UPDATE_DEFAULT_PORT_POLIO_REQUEST",
    updateDefaultPortPolioSaga
  );
  yield takeEvery("UPDATE_PORT_POLIO_NAME_REQUEST", updatePortPolioNameSaga);
  yield takeEvery("UPDATE_PORT_POLIO_IDS_REQUEST", updatePortPolioIdsSaga);
}
