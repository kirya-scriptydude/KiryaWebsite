//npm run devStart
const DATABASE_URL = "mongodb://localhost/website";

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(DATABASE_URL);
const workScheme = require("./models/work_post");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

async function saveNewForm(postToSave) {
    await postToSave.save();
}

app.get("/", (req, res) => {
    res.render("index");
})

const worksRouter = require("./routes/works");
app.use("/works", worksRouter);

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.listen(3000);


//dirty little hack teehee
const workpost = new workScheme({
    dirname: "still-no-release",
    title: "yeah whatever",
    description: "yep",
    content: 
`
# THIS IS REAL HOOD CLASSIC
## YEAH
yeah shututp
`
,

    imageDir: ""
});

//saveNewForm(workpost);