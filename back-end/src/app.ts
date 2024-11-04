import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

const cors = require("cors");
const authRouter = require("./routers/authRouter");
const homeRouter = require("./routers/homeRouter");
const userRouter = require("./routers/userRouter");
const portpolioRouter = require("./routers/portpolioRouter");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;
const app: Express = express();

const MongoClient = require("mongodb").MongoClient;

export const client = new MongoClient(process.env.MONGO_URI);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use(express.json());

// app.use(multer({ storage: fileStorage, fileFilter: fileFilter }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// router 분리 적용
app.use(authRouter);
app.use(homeRouter);
app.use(portpolioRouter);
app.use(userRouter);

// multure적용
app.use("/static/images", express.static("src/public/images"));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
