import { useEffect, useState } from "react";

function useCalculateClientWidth(ref: any) {
  const [rectHeight, setRectHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const height = ref.current.clientHeight;
      setRectHeight(rect.bottom);
      setClientHeight(height);
    }
  }, []);

  return {
    rectHeight,
    clientHeight,
  };
}

export default useCalculateClientWidth;
