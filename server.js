const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/db");
const workexperiencesRoutes = require("./routes/workexperiencesRoutes");
const dotenv = require("dotenv");
//
dotenv.config();

// Port
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutter (/routes)
app.use("/api/v1", workexperiencesRoutes);

// Starta server och databasanslutning
async function startServer() {
    try {
        // Anslut till databas (/config)
        await dbConnection();
        // Starta express-server
        app.listen(port, () => {
            console.log("Servern är igång och lyssnar på inkommande förfrågningar ✅")
        })

    } catch (err) {
        console.error("Server start misslyckades:", err.message)
        process.exit(1);
    }
}

startServer();