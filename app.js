const express = require("express");
const path = require("path");
const ejs = require("ejs");
const session = require("express-session")

const homeRouter = require("./routes/homeRouter");
const userRouter = require("./routes/userRouter");
const apiRouter = require("./routes/apiRouter")

app = express();

app.set("view engine", ejs);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/views")));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/api/v1", apiRouter);

module.exports = app;
