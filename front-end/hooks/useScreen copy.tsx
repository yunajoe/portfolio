import useClient from "@/hooks/useClient";
import { useEffect, useState } from "react";

function useScreen() {
  const isClient = useClient();

  const readScreenSize = () => {
    if (!isClient) {
      return undefined;
    }
    return window.innerWidth;
  };

  const [screenSize, setScreenSize] = useState(() => {
    return isClient ? readScreenSize() : undefined;
  });

  const handleSize = () => {
    const newSize = readScreenSize();

    if (newSize) {
      setScreenSize(newSize);
      return newSize;
    }
  };

  useEffect(() => {
    setScreenSize(readScreenSize());
  }, [isClient]);

  console.log("ScreenSize", screenSize);
  return {
    screenSize,
    handleSize,
  };
}

export default useScreen;
