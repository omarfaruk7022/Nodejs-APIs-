const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const usersRoute = require("./routes/v1/users.route");
const limiter = require("./middleware/limiter");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("uncaughtException", function (err) {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  app.close(() => {
    process.exit(1);
  });
});
