"use client";
import { Provider } from "react-redux";

import React, { useRef } from "react";

import { AppStore, makeStore } from "@/src/app/lib/store";

function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;
