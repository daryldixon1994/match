const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const gameSchema = new Schema(
    {
        gameName: {
            type: String,
        },
        playersNbre: {
            type: Number,
        },
        city: {
            type: String,
        },
        stade: {
            type: String,
        },
        date: {
            type: String,
        },
        players: [
            {
                fullName: String,
                phone: String,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("games", gameSchema);
