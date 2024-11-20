import { z } from "zod";

const breakPointSchema = z.object({
  max: z.number(),
  min: z.number(),
});

const sliderSettingsSchema = z.object({
  breakpoint: breakPointSchema,
  items: z.number(),
  slidesToSlide: z.number(),
});

const responsiveSchema = z.object({
  desktop: sliderSettingsSchema,
  laptop: sliderSettingsSchema,
  tablet: sliderSettingsSchema,
  mobile: sliderSettingsSchema,
});

export type BreakPoint = z.infer<typeof breakPointSchema>;
export type SliderSettings = z.infer<typeof sliderSettingsSchema>;
export type Responsive = z.infer<typeof responsiveSchema>;
