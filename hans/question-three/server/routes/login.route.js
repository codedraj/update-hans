const User = require("../db/user.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ auth: false, msg: "User not found" });
    } else {
      const bcrypt = require("bcryptjs");
      const passCheck = await bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (passCheck) {
        const jwt = require("jsonwebtoken");
        const token = await jwt.sign(
          { id: user._id },
          "hoolaHooperHoopedThroughTheHoops",
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .json({ auth: true, msg: "User found", token: token, user: user });
      } else {
        res.status(400).json({ auth: false, msg: "Something Went Wrong" });
      }
    }
  } catch (error) {
    res.status(500).json({ auth: false, msg: "Server Error" });
  }
});

module.exports = router;
