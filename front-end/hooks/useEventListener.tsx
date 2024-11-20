import useClient from "@/hooks/useClient";
import { useEffect } from "react";

function useEventListener(
  eventName: string,
  handler: () => void,
  element = typeof window !== "undefined" ? window : null
) {
  const isClient = useClient();

  useEffect(() => {
    if (!isClient || !element) return;

    element.addEventListener(eventName, handler);
    return () => {
      element.addEventListener(eventName, handler);
    };
  }, [isClient, eventName]);
}

export default useEventListener;
