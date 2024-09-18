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
      entries.forEach((entry: any) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          setIndex((prev) => {
            console.log(
              "prev",
              prev,
              infiniteData.length,
              "디렉션",
              scollDirection
            );
            // 데이터가
            if (prev >= infiniteData.length) {
              return prev;
            }

            if (scollDirection === "down" || scollDirection === "") {
              return prev + num;
            }

            if (scollDirection === "up") {
              console.log("나는 스크롤업");
              const oneRowCard = CardHeight + CardRowGap;
              const lastScrollPoistion =
                scrollpositionArr[scrollpositionArr.length - 1];
              let diff = lastScrollPoistion - scrollPosition;
              if (diff >= oneRowCard) {
                let quotient = diff / oneRowCard; // 1
                let deducedCardNums = Math.floor((quotient * num) / 4);
                return prev - deducedCardNums;
              }
            }

            console.log("하이하이", scrollPosition, scollDirection);

            return prev + num;
          });
        }
      });
    },
    [infiniteData, scrollPosition, scollDirection]
  );

  // console.log("데이터인덱스", index);

  useEffect(() => {
    if (data) {
      setInfiniteData(data);
    }
  }, [data]);

  useEffect(() => {
    if (infiniteData) {
      if (scollDirection === "down" || scollDirection === "") {
        console.log("나는데이터 자를 인덱스", index);
        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
      }
      if (scollDirection === "up") {
        console.log("iii");
        // const oneRowCard = CardHeight + CardRowGap;
        setScrollpositionArr((prev) => [...prev, scrollPosition]);
        // const lastScrollPoistion =
        //   scrollpositionArr[scrollpositionArr.length - 1];
        // let diff = lastScrollPoistion - scrollPosition;
        // if (diff >= oneRowCard) {
        // let quotient = diff / oneRowCard; // 1
        // let deducedCardNums = Math.floor((quotient * num) / 4);
        // setIndex((prev) => prev - deducedCardNums);

        const subData = infiniteData.slice(0, index);
        setDividedData(subData);
        // }
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
