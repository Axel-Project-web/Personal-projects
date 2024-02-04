const Ajv = require('ajv');
const ajv = new Ajv();

const schema = require('../schema/saveData.schema.json');

const validate = ajv.compile(schema);

function checkDataToSave(request, response, next) {
  const { body, params } = request;
  const dataToCheck = { ...body, ...params };
  if (validate(dataToCheck)) next();
  else response.status(400).send('mala petición');
}

module.exports = { checkDataToSave };
