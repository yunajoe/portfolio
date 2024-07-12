export const getAccessSchoolData = {
  method: "GET",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  url: "https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=6a5458afa13aad7b31b92dad09f23bb5&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list&perPage=1000",
};

export const getAccessSchoolDataByName = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  url: "https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=6a5458afa13aad7b31b92dad09f23bb5&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list&searchSchulNm=",
};
