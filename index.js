const express = require("express");
const { userController } = require("./routes/user.routes");
const { connection } = require("./db");
const { authentication } = require("./Middleware/auth");
const { investmentController } = require("./routes/investment.route");
const { UserModel } = require("./models/userModel");
const cors = require("cors");
const app = express();

app.use(cors())

app.use(express.json());

app.use("/user", userController);

app.use(authentication);

app.use("/", investmentController);

app.get("/profile", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  const user = await UserModel.findOne({ _id: userId });
  const { name, _id, email } = user;

  const profile = {
    id: _id,
    name: name,
    email: email,
  };
  try {
    res.json({ profile }); 
  } catch (err) {
    console.log(err); 
  }
});

app.get("/", (req, res) => {
  res.json({ status: "successful", data: "Api is running " });
}); 

app.listen("2020", async (req, res) => {
  try {
    await connection;
    console.log("App is connected ot monggoDb");
  } catch (err) {
    console.log(err);
  }
  console.log("App is listening on port 2020");
});
