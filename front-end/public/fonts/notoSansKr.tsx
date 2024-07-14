import React from "react";
import { Noto_Sans_KR } from "next/font/google";

const bold = Noto_Sans_KR({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
  style: "normal",
  variable: "--noto-sans_KR-bold",
});
const medium = Noto_Sans_KR({
  weight: "500",
  display: "swap",
  subsets: ["latin"],
  style: "normal",
  variable: "--noto-sans_KR-medium",
});

export { bold as notoSansKrBold, medium as notoSansKrMedium };
