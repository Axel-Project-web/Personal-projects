//helper
const {query} = require('../helper/query.helper');

async function authWidthUser(request, response) {
  const { email, password } = request.body;

  try {
    const result = await query(`select email, password, id from records where email = "${email}" and password = "${password}"`);
    if(result.length === 0) return response.status(404).json({ message: 'User not register' });
    response.json({
      token: result[0].id
    })
  } catch (error) {
    console.log(error)
    response.status(500).send();
  }
}

module.exports = { authWidthUser };
