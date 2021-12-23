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

app.listen(process.env.PORT || 6200, () => {
  console.log(`app run on port ${process.env.PORT}`);
});
