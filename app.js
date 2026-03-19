require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const { testConnection } = require("./config/database");
const formidable = require("express-formidable");
const cors = require("cors");

// Test database connection
testConnection();

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:3000",                  // local Next.js dev
    "https://landrup-dans-five.vercel.app"       // deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

// Middlewares
app.use(formidable());
app.use(router);

module.exports = app;


// require("dotenv").config();
// var express = require("express");
// var app = express();
// var router = require("./router");
// var { testConnection } = require("./config/database");
// var formidable = require("express-formidable");
// var cors = require("cors");

// testConnection();
// app.use(cors());
// app.use(formidable());
// app.use(router);

// module.exports = app;
