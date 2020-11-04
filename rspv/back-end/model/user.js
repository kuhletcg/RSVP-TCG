const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {type: String, required: true ,trim: true},
    Surname: {type: String, required: true, trim: true},
    Email: {type: String, required: true, trim: true},
    Dietary: {type: String, required: true, trim: true},
})

module.exports = mongoose.model ("User", userSchema);