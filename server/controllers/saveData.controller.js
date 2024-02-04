//helper
const {query} = require('../helper/query.helper');

//services
const {createConnection} = require('../services/db.connection');

async function saveData(request, response) {
  const { body, params } = request;

  try {
    const arrayResults = await query(`select id from records where id = "${params.id}"`);
    const userExist = arrayResults[0];
    if(!userExist) return response.status(400).send('User not found');
    const notes = JSON.stringify(body.notes);
    const result = await query(
      `update records set notes = ? where id = ?`, 
      [notes, params.id]
    );
    response.status(200).send({
      status: 'Saved changes',
    });
  } catch (error) {
    console.log(
      "ERROR AT FILE saveData.controller.js - 16",
      error
    )
    response.status(500).send();
  }
}

module.exports = { saveData };
