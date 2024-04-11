const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("works");
})

module.exports = router;