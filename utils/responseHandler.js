/**
 * Ett lyckat JSON-svar med meddelande och data.
 *
 * @param {Response} res - response-objekt
 * @param {string} message - Meddelande som skickas i svaret
 * @param {Object} data - Data som returneras till klienten
 * @param {number} status - HTTP-statuskod
 * @returns {Response} JSON-svar
 */
function successResponse(res, message, data, status) {
    return res.status(status).json({ success: true, message, data })
}

/**
 * Ett misslyckat JSON-svar med meddelande och tomt objekt.
 *
 * @param {Response} res - response-objekt
 * @param {string} message - Felmeddelande som skickas i svaret
 * @param {Object} data - Tomt objekt
 * @param {number} status - HTTP-statuskod
 * @returns {Response} JSON-svar
 */
function errorResponse(res, message, data , status) {
    return res.status(status).json({ success: false, message, data })
}

module.exports = { successResponse, errorResponse };