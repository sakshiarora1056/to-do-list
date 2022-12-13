const express = require("express");
const app = express();
const port = 8000;
require("./config/mongoose");

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));

//require('routes')
app.use("/", require("./routes/index"));

app.listen(port, function () {
  console.log("server started ", port, " 🚀🚀🚀🚀");
});
