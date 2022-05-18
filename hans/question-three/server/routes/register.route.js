const router = require("express").Router();

router.post("/", async (req, res) => {
  const User = require("../db/user.model");
  try {
    const userCheck = await User.findOne({ email: req.body.email });
    if (!userCheck) {
      const User = require("../db/user.model");
      const bcrypt = require("bcryptjs");
      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(req.body.password, salt);
      const user = new User({
        username: req.body.username,
        password: hash,
        email: req.body.email,
      });
      const result = await user.save();
      res.json({ reg: true, user: result });
      console.log("user registered");
    } else {
      res.json({ reg: false, msg: "User already exists" });
      console.log("user already exists");
    }
  } catch (error) {
    res.json({ reg: false, error: error, message: "Something Went Wrong" });
  }
});

module.exports = router;
