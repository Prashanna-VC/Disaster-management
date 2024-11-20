const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const db=require("./db");
const userRouter=require("./routes/userRoutes");
const app = express();

dotenv.config({ path: path.join(__dirname, "./.env") });

//
app.use(express.json());
app.use(cors());
app.options("*", cors());

//
 app.use("/", userRouter);

//
db();

//
app.listen(process.env.port, () =>
  console.log(`Example app listening on port ${process.env.port}!`)
);