/** @format */

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	console.log("/ hit");
	res.send("ok");
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
