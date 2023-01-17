const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

router.post("/createMatch", async (req, res) => {
    try {
        let { gameName, playersNbre, city, stade, fullName, phone, date } =
            req.body;
        let existedGame = await Game.findOne({ date });
        if (existedGame) {
            return res
                .status(500)
                .json({ status: true, message: "Unavailable date" });
        }
        const game = new Game({
            gameName,
            playersNbre,
            city,
            stade,
            date,
            players: [
                {
                    fullName,
                    phone,
                },
            ],
        });
        const createdGame = await game.save();
        res.status(200).json({ status: true, data: createdGame });
    } catch (error) {
        if (error) throw error;
        res.status(404).json({ status: false, error });
    }
});
router.put("/join/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { fullName, phone } = req.body;
        const selectedGame = await Game.findById(id);
        if (selectedGame.playersNbre <= 12) {
            const newTeam = await Game.findByIdAndUpdate(
                id,
                {
                    $push: {
                        players: {
                            fullName,
                            phone,
                        },
                    },
                },
                { new: true }
            );
            return res.status(200).json({
                status: true,
                message: "Welcome to the team",
                data: newTeam,
            });
        } else {
            return res.status(405).json({
                status: true,
                message: "There is no place in this team",
            });
        }
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
});
router.get("/games", async (req, res) => {
    try {
        const avilablesGames = await Game.find();
        res.status(200).json({ status: true, data: avilablesGames });
    } catch (error) {
        if (error) throw error;
        res.status(404).json({ error });
    }
});
module.exports = router;
