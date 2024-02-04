const { jwtVerify, SignJWT } = require('jose');
const { KEY_ENCODE } = require('../keys/specialkey');

async function checkToken(token) {
  try {
    const token_decoded = await jwtVerify(token, KEY_ENCODE);
    return {
      ...token_decoded,
      isValid: true,
    };
  } catch (error) {
    return {
      error: 'token inválido',
      isValid: false,
    };
  }
}

async function tokenMiddleware(request, response, next) {
  const { id } = request.params;
  const result = await checkToken(id);
  if (!result.isValid) response.status(401).send();
  else next();
}

module.exports = { tokenMiddleware };
