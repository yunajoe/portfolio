import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

import portPolioResultSlice from "@/src/app/lib/features/portpolio/portpolioResultSlice";
import portPolioSlice from "@/src/app/lib/features/portpolio/portpolioSlice";
import searchSlice from "@/src/app/lib/features/search/searchSlice";
import statusSlice from "@/src/app/lib/features/status/statusSlice";
import userSlice from "@/src/app/lib/features/user/userSlice";
import rootSaga from "@/src/app/lib/sagas";

// reducer들 모아넣기
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  portpolio: portPolioSlice.reducer,
  portpolioResult: portPolioResultSlice.reducer,
  search: searchSlice.reducer,
  user: userSlice.reducer,
  status: statusSlice.reducer,
});

// 애기서부터 store

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

// makeStore의 반환값
export type AppStore = ReturnType<typeof makeStore>;

// getState의 반환값
export type RootState = ReturnType<AppStore["getState"]>;

// dispatch 는 반환값이 없우니까
export type AppDispatch = AppStore["dispatch"];
