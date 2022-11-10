const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db");
connectDB(process.env.MONGO_URI);
const cron = require("node-cron");

const monitorRoutes = require("./routes/monitorRoutes");
const authRoutes = require("./routes/authRoutes");
const uptimeTestRoutes = require("./routes/uptimeTestRoute");

//Cron job test
var task = cron.schedule(
  "* * * * *",
  () => {
    console.log("stopped task");
  },
  {
    scheduled: false,
  }
);

task.start();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/v1/monitor", monitorRoutes);
app.use("/api/v1", authRoutes);
app.use("/uptime-check", uptimeTestRoutes);

app.get("/", (req, res) => {
  res.send("<div>Hello world</div>");
});

//CONNECTING TO THE DATABASE
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
