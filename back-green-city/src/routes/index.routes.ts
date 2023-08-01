import express from "express";
import { login, logout, register } from "../controllers/auth.controller";
import { authRequire } from "../middleware/validateToken";
import parcelaRouter from "./parcela.routes";
import userRouter from "./user.routes";
const API_VERSION = "/api/v1";

const ApiRouter = (app: any) => {
  const router = express.Router();
  app.use(`${API_VERSION}`, router);
  router.use(`/register`, register);
  router.use(`/login`, login);
  router.use(`/logout`, logout);
  router.use(`/parcelas`, parcelaRouter);
  router.use(`/users`, authRequire, userRouter);
};

export default ApiRouter;
