import cookieParser from "cookie-parser";
import express from "express";
import config from "./config";
import "./connection";
import ApiRouter from "./routes/index.routes";

const app = express();
app.use(express.json());
app.use(cookieParser());
ApiRouter(app);
app.listen(config.port, () => {
  console.log(`running in port ${config.port}`);
});
