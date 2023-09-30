const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true,useUnifiedTopology: true},
    () => {
        console.log("Connected to MongoDB");
    }
);

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});
