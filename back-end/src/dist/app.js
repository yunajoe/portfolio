"use strict";
exports.__esModule = true;
exports.client = void 0;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var cors = require("cors");
var authRouter = require("./routers/authRouter");
var homeRouter = require("./routers/homeRouter");
var userRouter = require("./routers/userRouter");
var port = process.env.PORT || 8080;
var app = express_1["default"]();
var MongoClient = require("mongodb").MongoClient;
exports.client = new MongoClient(process.env.MONGO_URI);
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express_1["default"].json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// router 분리 적용
app.use(authRouter);
app.use(homeRouter);
app.use(userRouter);
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:" + port);
});
