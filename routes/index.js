var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Obi Wan",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.post("/new", (req, res, next) => {
  messages.push({
    user: req.body.messageUser,
    text: req.body.messageText,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
