const Ajv = require('ajv');
const ajv = new Ajv();

//schema
const schema = require('../schema/create.schema.json');

const validate = ajv.compile(schema);

function createMiddleware(request, response, next) {
  const { body } = request;
  if (validate(body)) next();
  else response.status(400).send();
}

module.exports = { createMiddleware };
