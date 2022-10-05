const express = require("express");
const { User } = require("./models/user");
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.json({
    hello: "world!!",
  });
});

syncModels().then((_) => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

async function syncModels() {
  await User.sync({ alter: true });
}
