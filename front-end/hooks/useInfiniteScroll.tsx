"use client";
import useClient from "@/hooks/useClient";
import useScrollPosition from "@/hooks/useScrollPosition";
import { Item } from "@/types/portpolio";
import { MutableRefObject, useEffect, useMemo, useState } from "react";

function useInfiniteScroll(
  observerRef: MutableRefObject<null>,
  data: Item[],
  num: number
) {
  const [infiniteData, setInfiniteData] = useState(data);
  const [dividedData, setDividedData] = useState<Item[]>([]);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const { scrollPosition, scollDirection } = useScrollPosition();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry: any) => {
      const isIntersecting = entry.isIntersecting;
      if (index >= maxIndex) return;
      if (isIntersecting && index < maxIndex) {
        setIndex((prev) => {
          console.log("prev", prev);
          return prev + 1;
        });
      }
    });
  };

  useEffect(() => {
    if (data) {
      setInfiniteData(data);
    }
  }, [data]);

  useEffect(() => {
    if (infiniteData) {
      const maxIndex = Math.ceil(infiniteData.length / num);
      setMaxIndex(maxIndex);
      if (scollDirection === "down" || scollDirection === "") {
        console.log("index", index);
        const subData = infiniteData.slice(0, index * num + num);
        setDividedData(subData);
      }
      // if (scollDirection === "up") {
      //   console.log("스크롤을 업해여", scrollPosition);
      //   if (scrollPosition === 0) {
      //     const subData = infiniteData.slice(0, 19);
      //     setDividedData(subData);
      //   }
      // }
    }
  }, [infiniteData, index]);

  const isClient = useClient();

  const observer = useMemo(() => {
    if (!isClient) return null;
    return new IntersectionObserver(callback, options);
  }, [options]);

  useEffect(() => {
    if (!observer) return;
    if (!observerRef.current) return;
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [observerRef.current, index]);

  return {
    infiniteData,
    dividedData,
  };
}

export default useInfiniteScroll;
