const express = require("express");
const app = express();
const boxController = require("../Controller/BoxController.js");
const acheteurRoute = require("./AcheteurRoute");


app.use("/Acheteur/", acheteurRoute);

module.exports = app;