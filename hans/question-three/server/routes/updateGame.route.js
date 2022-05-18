const router = require("express").Router();

router.patch("/:id", async (req, res) => {
  const User = require("../db/user.model");
  console.log(req.params.id);
  console.log("yooooooooo");
  // const user = await User.findById(req.params.id);
  // const { gameBoard } = req.body;
  // if (user) {
  //   // add game to user.history
  //   user.history.unshift(gameBoard);
  //   const result = await user.save();
  //   res.json({ win: true, user: result });
  // } else {
  //   res.json({ win: false, msg: "User not found" });
  // }
});

module.exports = router;
