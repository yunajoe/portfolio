import { Responsive } from "@/types/carousel";

export const responsive: Responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5,
    slidesToSlide: 1,
  },
  laptop: {
    breakpoint: { max: 1399, min: 1024 },
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
    if (size >= 1400 && size <= 3000) {
      return "desktop";
    } else if (size >= 1024 && size <= 1399) {
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
type Environment = "desktop" | "laptop" | "tablet" | "mobile";

export const cardSize = (environment: Environment) => {
  switch (environment) {
    case "desktop":
      return 300;
    case "laptop":
      return 240;
    case "tablet":
      return 200;
    case "mobile":
      return 200;
    default:
      return 300;
  }
};
