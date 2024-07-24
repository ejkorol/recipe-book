export class ApiError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "Api Error";
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = "Not Found") {
    super(message, 404);
    this.name = "Not Found Error";
  }
}

export class DatabaseError extends ApiError {
  constructor(message: string = "Database Error") {
    super(message, 500);
    this.name = "Database Error";
  }
}

export class UnknownError extends ApiError {
  constructor(message: string = "Unknown Error") {
    super(message, 500);
    this.name = "Unknown Error";
  }
}

export class ValidationError extends ApiError {
  constructor(message: string = "Validation Error") {
    super(message, 400);
    this.name = "Validation Error";
  }
}

export class MissingParameterError extends ApiError {
  constructor(message: string = "Missing Parameter Error") {
    super(message, 400);
    this.name = "Missing Paramaters"
  }
}
