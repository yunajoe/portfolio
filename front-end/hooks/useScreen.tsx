import useClient from "@/hooks/useClient";
import { useState } from "react";

function useScreen() {
  let initVale = false;
  const isClient = useClient();

  if (isClient) {
    initVale = true;
  }

  const readScreenSize = () => {
    if (!isClient) {
      return undefined;
    }
    return window.innerWidth;
  };

  const [state, setState] = useState(() => {
    if (initVale) {
      return readScreenSize();
    }
    return undefined;
  });

  return <div></div>;
}

export default useScreen;
