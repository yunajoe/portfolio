import CarouselHeader from "@/components/carousel/CarouselHeader";
import CarouselSlide from "@/components/carousel/CarouselSlide";
import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./Carousel.module.scss";
const cx = classNames.bind(styles);
type CarouselProps = {
  children: ReactNode;
};

function Carousel({ children }: CarouselProps) {
  return <div className={cx("carousel")}>{children}</div>;
}

export default Object.assign(Carousel, {
  Header: CarouselHeader,
  Slide: CarouselSlide,
});
