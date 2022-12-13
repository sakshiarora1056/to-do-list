const mongoose = require("mongoose");
const config = {
  useNewUrlParser: true,
};
mongoose.connect(
  "mongodb://127.0.0.1:27017/todo",
  config,
  (err) => {
    if (err) {
      console.log("error in connecting to mongoose", err);
      return;
    }
    console.log("connected to mongoose");
  }
);
