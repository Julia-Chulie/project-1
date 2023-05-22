const express = require("express");
import "dotenv/config";
import { PORT } from "./src/config/const.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});