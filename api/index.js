const express = require("express");
const app = express();
const dotenv =  require("dotenv");
const cors = require("cors");

const  path = require("path");
dotenv.config();


app.use(express.json());
app.use(cors());

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


module.exports = app;