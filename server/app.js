import express from "express";
import "dotenv/config";
import { APP_PORT } from "./src/config/const.js";
import router from "./src/router/index.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(APP_PORT, () => {
  console.log(`listening at http://localhost:${APP_PORT}`);
});