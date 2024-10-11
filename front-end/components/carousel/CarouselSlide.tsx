import { SliderSettings } from "@/types/carousel";
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CarouselSlide.module.scss";
const cx = classNames.bind(styles);

type CarouselSlideProps = {
  responsive: {
    desktop: SliderSettings;
    tablet: SliderSettings;
    mobile: SliderSettings;
  };
  data: { image: string; title: string; description: string }[];
  currentIndex: number;
};

function CarouselSlide({ responsive, data, currentIndex }: CarouselSlideProps) {
  const [slideData, setSlideData] = useState(
    data.slice(currentIndex, currentIndex + 5)
  );

  useEffect(() => {
    if (currentIndex >= data.length - 5 + 1) {
      const newData = [
        ...data.slice(currentIndex, data.length),
        ...data.slice(0, 5 - (data.length - currentIndex)),
      ];
      setSlideData(newData);
    } else {
      setSlideData(data.slice(currentIndex, currentIndex + 5));
    }
  }, [currentIndex]);
  return (
    <div className={cx("carousel_slide")}>
      {slideData.map((card, index) => (
        <div key={index}>
          <Image src={card.image} alt="" width={300} height={300} />
          <div>{card.title}</div>
        </div>
      ))}
    </div>
  );
}

export default CarouselSlide;
