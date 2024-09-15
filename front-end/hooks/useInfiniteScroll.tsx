import { Item } from "@/types/portpolio";
import { MutableRefObject, useEffect, useState } from "react";

function useInfiniteScroll(
  observerRef: MutableRefObject<null>,
  data: Item[],
  num: number
) {
  const [infiniteData, setInfiniteData] = useState(data);
  const [dividedData, setDividedData] = useState<Item[]>([]);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // console.log("총데이터", infiniteData.length, num, infiniteData.length / num);

  //  root => 타켓 요소의 가시성을 확인할 떄 사용되는 요소. 타켓 요소보다 상위요소, 즉 요소의 조상 요소이여야 한다, 설정하지 않거나 null로주면은 view포트가 섲렁
  //
  // rootMargin => 루트 요소의 범위를 확장
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  // target요소의 관찰이 시작되거나 가시성에 변화가 생기면! 실행
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry: any) => {
      const isIntersecting = entry.isIntersecting;
      if (index > maxIndex) return;

      if (isIntersecting && index < maxIndex) {
        console.log("gggggggggggindex", index);
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
      const subData = infiniteData.slice(0, index * num + num);
      setDividedData(subData);
    }
  }, [infiniteData, index]);

  useEffect(() => {
    if (!observerRef.current) return;
    if (observerRef.current) {
      //  옵저버 설정
      let observer = new IntersectionObserver(callback, options);
      //  타겟 요소 관찰
      observer.observe(observerRef.current);
    }
  }, [observerRef.current, dividedData, index]);

  console.log("나눈야인덱수ㅠ", index, maxIndex);

  return {
    infiniteData,
    dividedData,
  };
}

export default useInfiniteScroll;
