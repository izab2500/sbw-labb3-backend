const Workexperience = require("../models/workexperienceModel");
const { successResponse, errorResponse } = require("../utils/responseHandler");

/**
 * Hanterar hämntning av alla arbetserfarenheter från databasen och skickar tillbaka ett JSON-svar.
 *
 * @param {Request} req - Inkommande request från frontend
 * @param {Response} res - Response-objekt som skickar tillbaka data
 * @returns {Promise<Response>} JSON med data eller felmeddelande
 */
async function getAllWorkexperiences(req, res) {
    try {
        const wk = await Workexperience.find();
        if (wk.length === 0) {
            return errorResponse(res, "Ingen arbetserfarenhet hittades", {}, 404);
        }
        return successResponse(res, "Hämtning av arbetserfarenheter lyckades", wk, 200);
    } catch (err) {
        return errorResponse(res, err.message, {}, 500);
    }
}

/**
 * Hanterar skapandet av arbetserfarenhet (POST) och skickar tillbaka ett JSON-svar.
 * 
 * @param {Request} req - Inkommande request från frontend
 * @param {Response} res - Response-objekt som skickar tillbaka data
 * @returns {Promise<Response>} JSON med data eller felmeddelande
 */
async function createWorkexperience(req, res) {
    try {
        const { companyname, jobtitle, location, description } = req.body;

        if (!companyname || !jobtitle || !location || !description) {
            return errorResponse(res, "Fält får inte vara tomt", {}, 400);
        }

        const wk = new Workexperience({ companyname, jobtitle, location, description });
        const savedWk = await wk.save();

        return successResponse(res, "Arbetserfarenhet skapades", savedWk, 201);

    } catch (err) {
        return errorResponse(res, err.message, {}, 500);
    }
}

/**
 * Hanterar uppdatering av arbetserfarenhet (PUT) och skickar tillbaka ett JSON-svar.
 * 
 * @param {Request} req - Inkommande request från frontend
 * @param {Response} res - Response-objekt som skickar tillbaka data
 * @returns {Promise<Response>} JSON med data eller felmeddelande
 */
async function updateWorkexperience(req, res) {
    try {
        const { companyname, jobtitle, location, description } = req.body;
        if (!companyname || !jobtitle || !location || !description) {
            return errorResponse(res, "Fält får inte vara tomt", {}, 400);
        }

        const id = req.params.id;

        const updated = await Workexperience.findByIdAndUpdate(
            id,
            {
                companyname,
                jobtitle,
                location,
                description
            },
            { new: true }
        );

        if (!updated) {
            return errorResponse(res, "Arbetserfarenhet hittades inte", {}, 404);
        }

        return successResponse(res, "Arbetserfarenhet uppdaterades", updated, 200);

    } catch (err) {
        return errorResponse(res, err.message, {}, 500);
    }
}

/**
 * Hanterar radering av arbetserfarenhet (DELETE) och skickar tillbaka ett JSON-svar.
 * 
 * @param {Request} req - Inkommande request från frontend
 * @param {Response} res - Response-objekt som skickar tillbaka data
 * @returns {Promise<Response>} JSON med data eller felmeddelande
 */
async function deleteWorkexperience(req, res) {
    try {
        const id = req.params.id;

        const deleted = await Workexperience.findByIdAndDelete(id);

        if (!deleted) {
            return errorResponse(res, "Arbetserfarenhet hittades inte", {}, 404);
        }

        return successResponse(res, "Arbetserfarenhet raderades", deleted, 200);

    } catch (err) {
        return errorResponse(res, err.message, {}, 500);
    }
}

module.exports = { getAllWorkexperiences, createWorkexperience, updateWorkexperience, deleteWorkexperience }
