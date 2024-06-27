/**
 * Title: Response Controller
 * Description: Handle Response Controller Here
 * Author: Md Abdullah
 * Date: 28/06/2024
 */

import { Response } from "express";

export const errorResponse = (
  res: Response,
  statusCode: number,
  message: string
): Response => {
  return res.status(statusCode).json({ message });
};

export const successResponse = (
  res: Response,
  statusCode: number,
  message: string,
  payload: Object
): Response => {
  return res.status(statusCode).json({ message, payload });
};
