"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.
// app.get("/", (req, res) => {
//   res.send({ message: "GET request to the homepage" });
// });
// app.get("/about", (req, res) => {
//   res.send({ message: "GET request to the about page" });
// });
// app.get("/user/:userId", (req, res) => {
//   res.send({ message: "GET request to the user page" });
// });

const router = express.Router()
router.get("/", (req, res) => {
  res.send({ message: "GET request to the homepage" });
});
router.get("/about", (req, res) => {
  res.send({ message: "GET request to the about page" });
});
router.get("/user/:userId", (req, res) => {
  res.send({ message: "GET request to the user page" });
});
app.use(router)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
