const express = require("express");
const Note = require("../models/note");
const router = express.Router();
const moment = require("moment");

router.use("/notes", require("./notes/index"));
router.use("/", async function (req, res) {
  let notesData = await Note.find({}).lean();

  notesData.map((item, index) => {
    notesData[index].date = moment(item.date).format("YYYY-MM-DD");
  });

  return res.render("home", {
    data: notesData,
  });
});

module.exports = router;
