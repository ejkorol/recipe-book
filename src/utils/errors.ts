/*
 * generic errors
*/
export class ApiError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  };
};


/*
 * 404 errors
*/
export class NotFoundError extends ApiError {
  constructor(message: string = "Not Found") {
    super(message, 404);
    this.name = "NotFoundError";
  };
};

/*
 * database related errors
*/
export class DatabaseError extends ApiError {
  constructor(message: string = "Database Error") {
    super(message, 500);
    this.name = "DatabaseError";
  };
};

/*
 * uncaught errors
*/
export class UnknownError extends ApiError {
  constructor(message: string = "Unknown Error") {
    super(message, 500);
    this.name = "UnknownError";
  };
};
