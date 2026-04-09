require("dotenv").config();
var express = require("express");
var app = express();
var router = require("./router");
var { testConnection } = require("./config/database");
var formidable = require("express-formidable");
var cors = require("cors");

testConnection();
// app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:3000",
    // "https://your-frontend.vercel.app"
  ]
}));
app.use("/file-bucket", express.static("assets"));
app.use(formidable());
app.use(router);

module.exports = app;
