export class CustomError {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }

  //   printError() {
  //     return this.message
  //   }
}

// const test = new CustomError(404);
// console.log("나는야 클래스 테스트", test);
