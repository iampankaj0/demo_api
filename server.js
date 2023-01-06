import express, { Router } from "express";
import dotenv from "dotenv";
import userRouter from "./router.js";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server working on PORT ${process.env.PORT}`);
});
