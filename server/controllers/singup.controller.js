//jwt
const { SignJWT } = require('jose');

//uuid
const { v4: uuidv4 } = require('uuid');

//helper
const { query } = require('../helper/query.helper');

const { KEY_ENCODE } = require('../keys/specialkey');

async function createToken(payload) {
  let token = null;
  try {
    token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .sign(KEY_ENCODE);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function createUser(request, response) {
  const { email, password, phone } = request.body;

  try {
    const result = await query(`select email from records where email = "${email}"`);

    if(result.length !== 0) return response.json({
      created: false,
      details: 'Email already in use.'
    })

    const token = await createToken({email});

    if(!token) {
      console.log('ERROR AT singup.controller.js');
      return response.status(500).send();
    }

    const res = await query(`insert into records(email, password, id, phone, notes) values ("${email}", "${password}", "${token}", "${phone}", "[]")`);
    response.status(200).json({
      created: true,
      details: 'User created'
    })
  } catch (error) {
    console.log(error);
    response.status(500).send();
  }
}

module.exports = { createUser };
