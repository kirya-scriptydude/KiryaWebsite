const express = require('express');
const router = express.Router();

const workScheme = require("./../models/work_post");

router.get("/", async (req, res) => {
    const works = await workScheme.find().sort({createdAt: "desc"});
    res.render("works", { works: works });
})

module.exports = router;