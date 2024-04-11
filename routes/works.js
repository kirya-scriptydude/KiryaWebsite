const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const works = [{
        title: "Test Article",
        date: Date.now(),
        description: "This is a test article woah"
    }]

    res.render("works", { works: works });
})

module.exports = router;