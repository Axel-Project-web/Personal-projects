const Ajv = require('ajv');
const ajv = new Ajv();

const schema = require('../schema/user.schema.json');
const validate = ajv.compile(schema);

function userMiddleware(request, response, next) {
  const { body } = request;
  if (validate(body)) {
    next();
  } else {
    response.status(400).send();
  }
}

module.exports = { userMiddleware };
