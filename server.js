const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("express-async-errors");
const morgan = require("morgan");

const connectDB = require("./db/connect.js");

//*middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authenticateUser = require("./middleware/auth");

//rouets
const authRouter = require("./routes/authRoutes");
const tasksRouter = require("./routes/tasksRouter.js");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome!");
});
// console.log("hello");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", authenticateUser, tasksRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
