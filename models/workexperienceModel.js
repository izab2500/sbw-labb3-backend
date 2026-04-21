const mongoose = require("mongoose");

/**
 * Definierar schema för Workexperience-dokument i MongoDB.
 * Används för att strukturera och validera data vid skapande och uppdatering.
 */
const workexperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        trim: true,
        required: [true, "The key companyname is missing"],
        minlength: [1, "Fältet får inte vara tomt"]
    },
    jobtitle: {
        type: String,
        trim: true,
        required: [true, "The key jobtitel is missing"],
        minlength: [1, "Fältet får inte vara tomt"]
    },
    location: {
        type: String, trim: true,
        required: [true, "The key location is missing"],
        minlength: [1, "Fältet får inte vara tomt"]
    },
    description: {
        type: String, trim: true,
        required: [true, "The key description is missing"],
        minlength: [1, "Fältet får inte vara tomt"]
    }
});

const Workexperience = mongoose.model("Workexperience", workexperienceSchema)

module.exports = Workexperience;
