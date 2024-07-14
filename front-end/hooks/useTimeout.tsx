import React, { useEffect, useRef } from "react";

function useTimeout(callbackFunction: () => void, time: number) {
  //
  const savedCallback = useRef(callbackFunction);

  useEffect(() => {
    savedCallback.current = callbackFunction;
  }, [callbackFunction]);

  useEffect(() => {
    const functionId = setTimeout(() => savedCallback.current(), time);
    return () => clearTimeout(functionId);
  }, []);

  return null;
}

export default useTimeout;
