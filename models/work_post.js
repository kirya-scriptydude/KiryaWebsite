const mongoose = require("mongoose");

const workpostSchema = new mongoose.Schema({
    dirname: {
        type: String,
        required: true,
        lowercase: true,
        immutable: true
    },

    title: String,

    description: String,
    
    createdAt: {
        type: Date,
        default: Date.now
    },

    content: String,

    imageDir: {
        type: String,
        default: "/images/placeholder.png"
    }
})

module.exports = mongoose.model("WorksPost", workpostSchema);