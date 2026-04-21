const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = require("../config/db");
const Workexperience = require("../models/workexperienceModel");
dbConnection();

/**
 * Körs manuellt i terminalen efter att server och databas är anslutna.
 * Används för att rensa och initiera databasen med testdata.
 */

const data = [
  {
    companyname: "ZA Restaurang AB",
    jobtitle: "Restaurangägare",
    location: "Stockholm",
    description: "Drev restaurang",
  },
  {
    companyname: "Nordic Build AB",
    jobtitle: "Delägare",
    location: "Oslo",
    description: "Ansvarade för byggprojekt",
  },
  {
    companyname: "International School",
    jobtitle: "Matematiklärare",
    location: "Barcelona",
    description: "Undervisade i matematik",
  },
  {
    companyname: "Malmö Gymnasium",
    jobtitle: "Statistiklärare",
    location: "Malmö",
    description: "Undervisade i statistik",
  },
  {
    companyname: "Green Energy AB",
    jobtitle: "Projektledare",
    location: "Helsingfors",
    description: "Ledde energiprojekt",
  },
  {
    companyname: "Finance Group AB",
    jobtitle: "Analytiker",
    location: "Stockholm",
    description: "Analyserade data",
  },
  {
    companyname: "Logistik Sverige AB",
    jobtitle: "Logistikkoordinator",
    location: "Uppsala",
    description: "Planerade transporter",
  },
  {
    companyname: "City Hotel AB",
    jobtitle: "Hotellchef",
    location: "Göteborg",
    description: "Ansvarade för drift",
  },
  {
    companyname: "Healthcare AB",
    jobtitle: "Sjuksköterska",
    location: "Lund",
    description: "Hanterade patienter",
  },
  {
    companyname: "Retail Group AB",
    jobtitle: "Butikschef",
    location: "Västerås",
    description: "Ledde butik",
  },
];


async function initDb() {
  try {
    await Workexperience.deleteMany(); 
    await Workexperience.insertMany(data);
    console.log("Databas initierades med data ✅");
  } catch (err) {
    console.error("Databs initiering misslyckades ❌:", err);
  }
}

initDb();
