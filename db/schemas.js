const mongoose = require("mongoose");

const duckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    colour: String
});

const duckModel = mongoose.model("duck", duckSchema);

module.exports = {
    duckModel
}