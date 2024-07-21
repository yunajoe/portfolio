//

export class CustomError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(400, message);
  }
}

export class InternalServerError extends CustomError {
  constructor(message = "internal server error") {
    super(500, message);
  }
}
