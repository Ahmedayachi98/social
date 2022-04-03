const express= require("express");
const app =express();
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const userRoute= require("./routes/users");
const authRoute= require("./routes/auth");
const connection = require("./db");
const postRoute = require("./routes/posts");


dotenv.config();


// database connection
connection();


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/posts", postRoute);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));