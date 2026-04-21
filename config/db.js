const mongoose = require("mongoose");

/**
 * Ansluter Mongoose till MongoDB-databasen.
 */
async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb anslutning startad ✅")
    } catch (err) {
        console.error("MongoDb anslutning misslyckades ❌", err)
    }
}

module.exports = dbConnection;