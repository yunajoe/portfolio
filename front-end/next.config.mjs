/** @type {import('next').NextConfig} */

import path from "path";

//  C:\Users\yunaj\OneDrive\바탕 화면\yunaProject\front-end
// console.log("ㅎㅎㅎ", process.cwd(), path.join(process.cwd(), "styles"));
//     prependData: "@import 'public/styles/colors.scss'; @import 'public/styles/mixin.scss';",

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"], // 사용하는 호스트 이름을 추가하세요
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    // prependData:
    //   "@import './global.module.scss'; @import './mixin.module.scss'",
  },
};

export default nextConfig;
