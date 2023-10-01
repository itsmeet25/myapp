const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DataBase Connected successfully");
    })
    .catch((error) => {
        console.log(error);
    });


app.listen(1000, () => {
    console.log("Server is running on port 1000");
});
