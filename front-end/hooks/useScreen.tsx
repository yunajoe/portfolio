import useClient from "@/hooks/useClient";
import { useEffect, useState } from "react";

function useScreen() {
  const isClient = useClient();

  const readScreenSize = () => {
    if (isClient) {
      return window.innerWidth;
    }
    return undefined;
  };

  const [screenSize, setScreenSize] = useState(readScreenSize);

  const handleSize = () => {
    const newSize = readScreenSize();
    if (newSize) {
      setScreenSize(newSize);
    }
  };

  useEffect(() => {
    handleSize();
  }, [isClient]);

  return {
    screenSize,
    handleSize,
  };
}

export default useScreen;
