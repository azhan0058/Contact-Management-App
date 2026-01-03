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

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	// react app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));



