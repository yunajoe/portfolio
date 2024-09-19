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

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const isIntersecting = entry.isIntersecting;
        console.log("옵저버가 보여영 =======> ", isIntersecting);

        // 스크롤다운이거나 처음일때!
        if (scollDirection === "down" || scollDirection === "") {
          console.log("arr111111111111", scrollpositionArr);
          if (isIntersecting) {
            setIndex((prev) => {
              console.log("스크롤다운", prev);
              if (prev >= infiniteData.length) {
                return prev;
              }
              return prev + num;
            });
          }
        }

        // 스크롤 업할때
        if (scollDirection === "up") {
          console.log("나는 스크롤업", scollDirection);
          const oneRowCard = CardHeight + CardRowGap;
          const lastScrollPoistion =
            scrollpositionArr[scrollpositionArr.length - 1];
          let diff = lastScrollPoistion - scrollPosition;
          console.log("arr22222222222", scrollpositionArr);
          if (diff >= oneRowCard) {
            let quotient = diff / oneRowCard; // 1
            let deducedCardNums = Math.floor((quotient * num) / 4);
            setIndex((prev) => prev - deducedCardNums);
          }
        }
      });
    },
    [infiniteData, scrollPosition]
  );

  useEffect(() => {
    if (data) {
      setInfiniteData(data);
    }
  }, [data]);

  useEffect(() => {
    if (infiniteData) {
      if (scollDirection === "down" || scollDirection === "") {
        console.log("나는데이터 자를 인덱스, when 스크롤이즈 down", index);
        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
      }
      if (scollDirection === "up") {
        console.log("나는데이터 자를 인덱스, when 스크롤이즈 up", index);

        setScrollpositionArr((prev) => [...prev, scrollPosition]);
        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
      }
    }
  }, [infiniteData, index]);

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

    // return () => {
    //   observer?.disconnect();
    // };
  }, [observer]);

  return {
    infiniteData,
    dividedData,
  };
}

export default useInfiniteScroll;
