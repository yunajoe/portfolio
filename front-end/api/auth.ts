// // accessToken, refreshToken을 받기

// import instance from ".";

// export const getKaKaoAccessToken = async (kakaoAuthCode: string) => {
//   const response = await instance.post("auth/login/kakao", {
//     code: kakaoAuthCode,
//   });
//   return response;
// };

// export type registerLocalType = {
//   email: string;
//   password: string;
// };

// export type logoutType = {
//   type: string;
//   _id: string;
// };

// export type WithDrawlType = {
//   _id: string;
// };
// export const registerLocal = async (data: registerLocalType) => {
//   const response = await instance.post("auth/register/local", {
//     data,
//   });
//   return response;
// };

// export const loginLocal = async (data: registerLocalType) => {
//   const response = await instance.post("auth/login/local", {
//     data,
//   });
//   return response;
// };

// export const logout = async (data: logoutType) => {
//   const { _id } = data;
//   const response = await instance.post("auth/logout", {
//     data: _id,
//   });
//   return response;
// };

// export const withDrawal = async (data: WithDrawlType) => {
//   const { _id } = data;
//   const response = await instance.delete("auth/delete", {
//     data: {
//       _id,
//     },
//   });
//   return response;
// };
