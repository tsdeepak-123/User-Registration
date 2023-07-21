const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser=require('cookie-parser')
require("./config/connection");
const path=require("path")
const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials:true
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", userRoute);


app.listen(5000, () => {
  console.log("server running");
});
