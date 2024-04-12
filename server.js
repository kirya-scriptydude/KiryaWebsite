//npm run devStart
const DATABASE_URL = "mongodb://localhost/website";

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(DATABASE_URL);

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("index");
})

const worksRouter = require("./routes/works");
app.use("/works", worksRouter);

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.listen(3000);