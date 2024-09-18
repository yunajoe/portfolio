import useThrottle from "@/hooks/useThrottle";
import { useEffect, useState } from "react";

function useScrollPosition() {
  const [scollDirection, setScrollDirection] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const throttle = useThrottle();

  useEffect(() => {
    const updatePosition = () => {
      const currentScrollLocation = window.scrollY;
      setScrollPosition((prev) => {
        if (prev < currentScrollLocation) {
          setScrollDirection("down");
        }
        if (prev > currentScrollLocation) {
          setScrollDirection("up");
        }

        return currentScrollLocation;
      });
    };

    // throttle(updatePosition, 1000))
    window.addEventListener("scroll", throttle(updatePosition, 1000));
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return {
    scrollPosition,
    scollDirection,
  };
}

export default useScrollPosition;
