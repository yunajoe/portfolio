import { useState } from "react";

const IS_SERVER = typeof window === "undefined";

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const readValue = () => {
    if (IS_SERVER) {
      console.warn("client환경에서 실행해주세요");
    }

    try {
      const getItem = localStorage.getItem(key);
      return getItem ? JSON.parse(getItem) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
    }
  };
  const [storeValue, setStoreValue] = useState(() => readValue());

  const setValue = (newValue: T) => {
    if (IS_SERVER) {
      console.warn("client환경에서 실행해주세요");
    }
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoreValue(newValue);
    } catch (error) {
      console.warn(`Error saving localStorage key “${key}”:`, error);
    }
  };

  const removeValue = () => {
    if (IS_SERVER) {
      console.warn("client환경에서 실행해주세요");
    }
    localStorage.removeItem(key);
  };

  return {
    storeValue,
    setValue,
    removeValue,
  };
}

export default useLocalStorage;
