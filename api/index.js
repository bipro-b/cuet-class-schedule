const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path =require('path');
const colors = require("colors");


dotenv.config();


app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`Connected to MongoDB!`.green.bold);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});


app.get("/",(req,res)=>{
    res.send("server is running.");
})

 const authRoute = require("./src/routes/authRoute");
 const courseRoute = require("./src/routes/courseRoute")


app.use("/api/auth",authRoute);
app.use("/api/course",courseRoute);




app.use(express.static(path.join(__dirname,'/client/build')));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'client','dist','index.html'));
});


// middleware


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

