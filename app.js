const express = require("express");
const path = require("path");
const ejs = require("ejs");

const homeRouter = require("./routes/homeRouter");
const userRouter = require("./routes/userRouter")

app = express();

app.set("view engine", ejs);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/views")));

app.use("/", homeRouter);
app.use("/user", userRouter);

module.exports = app;
