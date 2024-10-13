type BreakPoint = {
  max: number;
  min: number;
};

export type SliderSettings = {
  breakpoint: BreakPoint;
  items: number;
  slidesToSlide: number;
};

export type Responsive = {
  desktop: SliderSettings;
  laptop: SliderSettings;
  tablet: SliderSettings;
  mobile: SliderSettings;
};
