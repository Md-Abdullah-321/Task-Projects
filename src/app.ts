import express, { Express, NextFunction, Request, Response } from "express";
import { AppError } from "./AppError.js";
import { errorResponse } from "./Controllers/responseController.js";
import router from "./routers/productRouters.js";

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", router);

//Global Error Handler:
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    const statusCode = err instanceof AppError ? err.status : 500;
    const message = err.message || "There is an error on the server.";
    return errorResponse(res, statusCode, message);
  }
);

export default app;
