const mongoose = require("mongoose");

const workpostSchema = new mongoose.Schema({
    dirname: {
        type: String,
        required: true,
        lowercase: true,
        immutable: true
    },

    title: String,
    description: String
})

module.exports = mongoose.model("WorksPost", workpostSchema);