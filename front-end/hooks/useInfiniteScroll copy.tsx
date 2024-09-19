"use client";
import useClient from "@/hooks/useClient";
import useScrollPosition from "@/hooks/useScrollPosition";
import { Item } from "@/types/portpolio";
import { CardHeight, CardRowGap } from "@/utils/consts";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

function useInfiniteScroll(
  observerRef: MutableRefObject<null>,
  data: Item[],
  num: number
) {
  const [infiniteData, setInfiniteData] = useState(data);
  const [dividedData, setDividedData] = useState<Item[]>([]);
  const [index, setIndex] = useState(0);
  const [scrollpositionArr, setScrollpositionArr] = useState<number[]>([]);

  const { scrollPosition, scollDirection } = useScrollPosition();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  console.log("scrollPosition, scollDirection", scrollPosition, scollDirection);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: any) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          setIndex((prev) => {
            console.log("하이하이", scrollPosition, scollDirection);
            //TODO: prev가 infindate.length를 넘어가 버린당!
            if (prev !== 0 && infiniteData.length > 0) {
              if (prev >= infiniteData.length) {
                return prev;
              }
            }
            return prev + num;
          });
        }
      });
    },
    [infiniteData, scrollPosition]
  );

  console.log("데이터인덱스", index);

  useEffect(() => {
    if (data) {
      setInfiniteData(data);
    }
  }, [data]);

  useEffect(() => {
    if (infiniteData) {
      if (scollDirection === "down" || scollDirection === "") {
        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
      }
      if (scollDirection === "up") {
        const oneRowCard = CardHeight + CardRowGap;
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
        const lastScrollPoistion =
          scrollpositionArr[scrollpositionArr.length - 1];
        let diff = lastScrollPoistion - scrollPosition;
        if (diff >= oneRowCard) {
          let quotient = diff / oneRowCard; // 1
          let deducedCardNums = Math.floor((quotient * num) / 4);
          setIndex((prev) => prev - deducedCardNums);
          console.log();

          const subData = infiniteData.slice(0, index);
          setDividedData(subData);
        }
      }
    }
  }, [infiniteData, index, scollDirection, scrollPosition]);

  const isClient = useClient();

  const observer = useMemo(() => {
    if (!isClient) return null;
    return new IntersectionObserver(callback, options);
  }, [isClient, callback]);

  useEffect(() => {
    if (!observerRef.current) return;
    if (observer && observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, [observer]);

  return {
    infiniteData,
    dividedData,
  };
}

export default useInfiniteScroll;
