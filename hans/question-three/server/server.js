const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const dbConnected = require("./db/dbConnected");
dbConnected();

app.use("/login", require("./routes/login.route"));
app.use("/register", require("./routes/register.route"));
app.use("/updateGame", require("./routes/updateGame.route"));

app.post("/gameLost", async (req, res) => {
  console.log(req.body);
  console.log("yooo");
});

const port = 5201;
app.listen(port, () => console.log(`Server started on port ${port}`));
