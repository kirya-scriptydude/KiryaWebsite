const DATABASE_URL = "mongodb://localhost/website";

const fs = require("fs");

const mongoose = require("mongoose");
const workScheme = require("./../models/work_post");
mongoose.connect(DATABASE_URL);

async function tryParseJSON(err, data) {
    var obj = JSON.parse(data);

    if (obj.dirname != null || obj.dirname != "") {
        await saveToDB(obj);
    } else {
        "no dirname :("
    }

    process.exit();
}

async function saveToDB(obj) {
    const existingObj = await workScheme.exists({dirname: obj.dirname});

    if (!existingObj) {
        var workmodel = new workScheme({
            dirname: obj.dirname,
            title: obj.title,
            description: obj.description,
            content: obj.content
        });
        await workmodel.save();
        console.log("inserted a " + obj.dirname + " into db")
    } else return;
}

fs.readFile("./post/workpost_form.json", tryParseJSON);
