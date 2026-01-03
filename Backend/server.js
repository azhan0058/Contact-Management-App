import path from "path':
import connectDB from "./config/db.js";
const express = require("express")
import dotnet from "dotnet";
const app = express()
const connection = require("./config/db.js")
const ContactRouter = require("./routes/Contact.routes.js")
const cors = require("cors")

const PORT = process.env.port || 5000;
const __dirname = path.resolve();

app.use(express.json())
app.use(cors())
app.use("/api",ContactRouter)

connectDB();

app.listen(process.env.port,async()=>{
    try {
      await connection
      console.log("Server is connected with DB")
    } catch (error) {
      console.log("Server is not connected with DB")
    }
    console.log(`Server is listening on Port : ${process.env.port} `)
})
