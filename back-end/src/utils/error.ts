//

export class UserError {
  type: string;

  constructor(type: string) {
    this.type = type;
  }
  print400Error() {
    switch (this.type) {
      case "password":
        return {
          status: 400,
          message: "현재 비밀번호와 다릅니다",
        };
      case "username":
        return {
          status: 400,
          message: "닉네임 변경에 실패하였습니다",
        };
      case "profileImage":
        return {
          status: 400,
          message: "프로필 이미지 변경에 실패하였습니다",
        };
      case "findUserByOjectID":
        return {
          status: 400,
          message: "user정보를 가지고 오는데 실패하였습니다",
        };
      case "findUserByUserTableID":
        return {
          status: 400,
          message: "user정보를 가지고 오는데 실패하였습니다",
        };
    }
  }
  print401Error() {
    switch (this.type) {
      case "password":
        return {
          status: 401,
          message: "현재 비밀번호와 새로운 비밀번호가 같습니다",
        };
      case "profileImage":
        return {
          status: 401,
          message: "이미지 파일을 올려주세요",
        };
    }
  }
}

export class AuthError {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  print410Error() {
    switch (this.type) {
      case "refreshToken":
        return {
          status: 410,
          message: "refresh 토큰이 없습니다",
        };
    }
  }
  print411Error() {
    switch (this.type) {
      case "refreshToken":
        return {
          status: 411,
          message: "refresh 토큰이 유효하지 않습니다",
        };
    }
  }
  print420Error() {
    switch (this.type) {
      case "accessToken":
        return {
          status: 420,
          message: "access 토큰이 없습니다",
        };
    }
  }
  print421Error() {
    switch (this.type) {
      case "accessToken":
        return {
          status: 421,
          message: "access 토큰이 유효하지 않습니다",
        };
    }
  }
}
