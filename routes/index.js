var express = require("express");
var router = express.Router();

messages = [
  {
    text: "Hello ",
    user: "Vamsi",
    added: new Date(),
  },
  {
    text: "Welcome ",
    user: "DHH",
    added: new Date(),
  },
  {
    text: "Hii ",
    user: "Jim",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "MiniMessageBoard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("new");
});

router.post("/new", function (req, res, next) {
  const { name, message } = req.body;
  messages.push({ user: name, text: message, added: new Date() });

  console.log(messages);
  res.redirect("/");
});

module.exports = router;
