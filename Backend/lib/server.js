// env file
require("dotenv").config();
//import tools
const express = require("express");
const core = require("cors");
// import data
const homeData = require("../DB/data");

// call express//
const app = express();

app.use(express.json());
app.use(core());
//
app.get("/", (req, res) => {
  res.send(homeData);
});

<<<<<<< HEAD
app.listen( 6200, () => {
=======
app.listen(6200, () => {
>>>>>>> f39236054448d404d9b76249904992a773c2e3a7
  console.log(`app run on port 6200`);
});
