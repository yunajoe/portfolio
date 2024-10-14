import { Responsive } from "@/types/carousel";

export const responsive: Responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 5,
    slidesToSlide: 1,
  },
  laptop: {
    breakpoint: { max: 1299, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 360 },
    items: 2,
    slidesToSlide: 1,
  },
};

export const environemnt = (size: number | undefined) => {
  if (size) {
    if (size >= 1300 && size <= 3000) {
      return "desktop";
    } else if (size >= 1024 && size <= 1299) {
      return "laptop";
    } else if (size >= 768 && size <= 1023) {
      return "tablet";
    } else if (size >= 360 && size <= 767) {
      return "mobile";
    }
  }
  // size가 undefined일때 그냥 desktop으로 해놈 흠
  return "desktop";
};
