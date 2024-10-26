import { HttpException, HttpExceptionOptions } from "@nestjs/common";

export declare class UserNotFoundException extends HttpException {
  constructor(objectOrError?: string | object | any, descriptionOrOptions?: string | HttpExceptionOptions);
}