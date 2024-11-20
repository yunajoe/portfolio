import { Responsive } from "@/schemas/carousel";
import { cardSize, responsive } from "@/utils/carousel";
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CarouselSlide.module.scss";
const cx = classNames.bind(styles);

type CarouselSlideProps = {
  data: { image: string; title: string; description: string }[];
  currentIndex: number;
  environemnt: keyof Responsive;
};

function CarouselSlide({
  data,
  currentIndex,
  environemnt,
}: CarouselSlideProps) {
  const [slideData, setSlideData] = useState(
    data.slice(currentIndex, currentIndex + responsive[environemnt].items)
  );
  const [itemCount, setItemCount] = useState(() => {
    if (environemnt) {
      return responsive[environemnt].items;
    }
    return undefined;
  });

  useEffect(() => {
    if (itemCount) {
      if (currentIndex >= data.length - itemCount + 1) {
        const newData = [
          ...data.slice(currentIndex, data.length),
          ...data.slice(0, itemCount - (data.length - currentIndex)),
        ];
        setSlideData(newData);
      } else {
        setSlideData(data.slice(currentIndex, currentIndex + itemCount));
      }
    }
  }, [currentIndex, itemCount]);

  useEffect(() => {
    if (environemnt) {
      setItemCount(responsive[environemnt].items);
    }
  }, [environemnt]);
  return (
    <div className={cx("carousel_slide")}>
      {slideData.map((card, index) => (
        <div key={index}>
          <Image
            src={card.image}
            alt="image"
            width={cardSize(environemnt)}
            height={300}
          />
          <div>{card.title}</div>
        </div>
      ))}
    </div>
  );
}

export default CarouselSlide;
