const express = require("express");
const app = express();
const cors = require("cors");


 
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is running.");
})

 const authRoute = require("./src/routes/authRoute");
/*const categoryRoute = require("./src/routes/category")
const userRoute = require("./src/routes/user") */

app.use("/api/auth",authRoute);
/*app.use("/api/v1/category",categoryRoute);
app.use("/api/v1/user",userRoute);
 */


module.exports = app;