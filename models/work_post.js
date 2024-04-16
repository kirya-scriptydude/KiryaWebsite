const mongoose = require("mongoose");

const createDomPurifier = require("dompurify");
const { JSDOM } = require("jsdom");
const { marked } = require("marked");
const dompurify = createDomPurifier(new JSDOM().window);

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
    },

    sanitizedHtml: {
        type: String,
        required: true
    }
})

workpostSchema.pre("validate", function(next) {
    if (this.content) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.content));
    }

    next();
})

module.exports = mongoose.model("WorksPost", workpostSchema);