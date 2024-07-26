// const baseURL = "http://localhost:8080/";
// let authTokens = localStorage.getItem("authTokens")
//   ? JSON.parse(localStorage.getItem("authTokens"))
//   : null;

// const axiosInstance = axios.create({
//   baseURL,
//   headers: { Authorization: `Bearer ${authTokens.access}` },
// });

// axiosInstance.interceptors.request.use(async (req) => {
//   if(!authTokens){
//     console.log("req", req);
//     authTokens = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem)? null
//     req.headers.Authorization = `Bearer ${authTokens?.access}`
//   }
//  const user = jwt_decode(authTokens.access)
//  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
//  if(!isExpired) return req
// const response = await axios.post(`${baseURL}/api/token/refresh`, {
//   refresh: authTokens.refresh
// })
// localStorage.setItem("authTOkens", JSON.stringify(response.data))
// req.headers.Authrozation = `Bearer ${response.data.access}`
// return req

// });

// export default axiosInstance;
