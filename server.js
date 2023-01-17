const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const DBNAME = process.env.DBNAME;
const DBPW = process.env.DBPW;
mongoose
    .connect(
        `mongodb+srv://${DBNAME}:${DBPW}@cluster0.ji3a2f7.mongodb.net/MATCH?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => console.log(err));
// mongoose.set("strictQuery", false);

app.use(express.json());
app.use("/api", require("./routes"));

app.listen(5000, (err) => {
    if (err) throw err;
    console.log("server is up and running");
});
