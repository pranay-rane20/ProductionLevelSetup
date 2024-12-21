const express = require('express');
const app = express();
require('dotenv').config();
const indexRouter = require("./routes/index-route");
const {indexC} = require("./controllers/index-control")

app.set("view-engine","ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/",indexRouter);

module.exports = app;
