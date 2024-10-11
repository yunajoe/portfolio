import { useEffect } from "react";

function useEventListener(
  eventName: string,
  handler: () => void,
  element = window
) {
  useEffect(() => {
    console.log("안냐세여 저는 useEFfect입니다");

    element.addEventListener(eventName, handler);
    return () => {
      console.log("클린업함슈");
      element.addEventListener(eventName, handler);
    };
  }, []);

  return null;
}

export default useEventListener;
