const mongoose = require("mongoose");

const db = () => {
    mongoose.connect("mongodb://localhost/clubDelPlan", () => {
        console.log("db levantada");
    }) 
}

db();
