import {
  getDefaultPortPolioReset,
  selectPortPolioResult,
} from "@/src/app/lib/features/portpolio/portpolioResultSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useCustomNavigation() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { default_portpolio } = useAppSelector(selectPortPolioResult);

  useEffect(() => {
    if (
      default_portpolio.portpolioId !== "" &&
      default_portpolio.defaultResume
    ) {
      router.push(`/myportpolio/edit/${default_portpolio.portpolioId!}`);
    }
    return () => {
      dispatch(getDefaultPortPolioReset());
    };
  }, [default_portpolio.portpolioId]);
}

export default useCustomNavigation;
