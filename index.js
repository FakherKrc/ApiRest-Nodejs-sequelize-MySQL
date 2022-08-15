const express = require("express");
const app = express();
const apiRouter = require("./Route/Api");
const cors = require("cors");
const sequelize = require("sequelize");




app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());


app.use('/', apiRouter);


app.listen(8081, () => console.log("Server started"));

module.exports = app;