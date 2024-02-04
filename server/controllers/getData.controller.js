//helper
const { query } = require('../helper/query.helper');

async function getData(request, response) {
  const { id } = request.params;

  try {
    const result = await query(`select email, notes from records where id = "${id}"`);
    if(result.length == 0) return response.json({
      ok: false,
      details: 'User not found',
    });
    response.json(result[0]);
  } catch (error) {
    response.status(500).send();
  }
}

module.exports = { getData };
