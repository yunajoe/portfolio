"use client";

import { ToastContext } from "@/context/ToastContext";
import {
  defaultPortPolioReset,
  updatePortPolioNameStatusReset,
  updateProfileImageStatusReset,
  updateUserNickNameStatusReset,
} from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { useContext, useEffect } from "react";

function useToast(type: string, status: number | null, message: string) {
  const toast = useContext(ToastContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 200) {
      toast?.open(message);
    }
    return () => {
      if (type === "portpolio") {
        dispatch(defaultPortPolioReset());
      } else if (type === "username") {
        dispatch(updateUserNickNameStatusReset());
      } else if (type === "profile_image") {
        dispatch(updateProfileImageStatusReset());
      } else if (type === "portpolio_name") {
        dispatch(updatePortPolioNameStatusReset());
      }
    };
  }, [status, type]);
}

export default useToast;
