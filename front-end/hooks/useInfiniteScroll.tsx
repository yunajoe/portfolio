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
    threshold: 0.9,
  };
  useEffect(() => {
    if (data) {
      setInfiniteData(data);
    }
  }, [data]);
  console.log("infin", infiniteData);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const isIntersecting = entry.isIntersecting;

        if (scollDirection === "down" || scollDirection === "") {
          if (isIntersecting) {
            setIndex((prev) => {
              if (prev >= infiniteData.length) {
                return prev;
              }
              return prev + num;
            });
          }
        }

        // 스크롤 업할때
        if (scollDirection === "up") {
          const oneRowCard = CardHeight + CardRowGap;
          const lastScrollPoistion =
            scrollpositionArr[scrollpositionArr.length - 1];
          let diff = lastScrollPoistion - scrollPosition;
          if (Math.abs(diff) >= oneRowCard) {
            let quotient = diff / oneRowCard;
            let deducedCardNums = Math.floor((quotient * num) / 4);
            setIndex((prev) => {
              if (prev <= num) {
                return prev;
              }
              return prev - deducedCardNums;
            });
          }
        }
      });
    },
    [infiniteData, scrollpositionArr.length, scollDirection, scrollPosition]
  );

  useEffect(() => {
    if (infiniteData) {
      if (scollDirection === "down" || scollDirection === "") {
        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
      }
      if (scollDirection === "up") {
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
      }
    }
  }, [index, infiniteData.length]);

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
