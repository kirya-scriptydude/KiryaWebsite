const express = require('express');
const router = express.Router();

const workScheme = require("./../models/work_post");

router.get("/", async (req, res) => {
    const works = await workScheme.find().sort({createdAt: "desc"});
    res.render("works", { works: works });
})

router.get("/new", (req, res) => {
    res.render("create/workNew");
});

router.post("/", async (req, res) => {
    var work = new workScheme({
        dirname: req.body.dirname,
        title: req.body.title,
        description: req.body.desc,
        imageDir: req.body.image,
        content: req.body.content
    })

    try {
        work = await work.save();
        res.redirect(`/works/${work.dirname}`);
    } catch(e) {
        console.log(e);
    }
});

router.get("/:id", async (req, res) => {
    const workArticle = await workScheme.find().where({dirname: req.params.id});

    if (workArticle.length != 0) {
        res.render("posts/workpost", {workArticle: workArticle[0]})
    } else {
        res.status(404).send("404 Not Found");
    }
})

module.exports = router;