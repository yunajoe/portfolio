// import { getCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import instance from "./index";
// // / api 요청이 이루어지기 전 로직설계.
// instance.interceptors.request.use(
//   (config: any) => {
//     const accessToken = getCookie("accessToken");
//     const router = useRouter();
//     console.log("access", accessToken);
//     if (!accessToken) {
//       router.push("/");
//       return config;
//     }
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   },
//   (error) => {
//     console.log("하이");
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
