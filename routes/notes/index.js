const express = require("express");
const Note = require("../../models/note");
const router = express.Router();

//create
router.post("/create", function (req, res) {
  Note.create(
    {
      category: req.body.category,
      date: req.body.date,
      description: req.body.description,
      title: req.body.title,
    },
    function (err, data) {
      if (err) {
        console.log("error in creating notes ", err);
        return res.redirect("back");
      } else {
        console.log("new note is ", data);
        return res.redirect("back");
      }
    }
  );
});

//delete
router.get("/delete/:noteId", function (req, res) {
  Note.findByIdAndDelete(req.params.noteId).then(() => {
    return res.redirect("back");
  });
});

router.get("/update-status/:noteId", function (req, res) {
  Note.findByIdAndUpdate(req.params.noteId, { completed: true }).then(() => {
    return res.redirect("back");
  });
});

router.post("/update", async (req, res) => {
  Note.findByIdAndUpdate(req.body.noteId, {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    category: req.body.category,
  }).then(() => {
    return res.redirect("back");
  });
});

module.exports = router;
