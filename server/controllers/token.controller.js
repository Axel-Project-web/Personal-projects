//helper
const { query } = require('../helper/query.helper');

async function authWidthToken(request, response) {
  const { id } = request.params;

  try {
    const result = await query(`select id from records where id = "${id}"`);
    if(result.length === 0) return response.status(401).json({
      userRegistered: false,
    });

    response.status(200).json({
      userRegistered: true,
    });
  } catch (error) {
    console.log(
      "ERROR AT FILE token.controller.js - 18",
      error
    )
    response.status(500).send();
  }
}

module.exports = { authWidthToken };
