//services
const { createConnection } = require('../services/db.connection');

async function query( query, params = [] ) {
    return new Promise(async (resolve, reject)=> {
        try {
            const {connection, endConnection} = await createConnection();
            connection.query(
                query,
                (params.length > 0 ? params : []),
                (err, results)=> {
                    endConnection();
                    if(err) {
                        return reject({
                            err,
                            message: 'ERROR AT helper/query.helper.js',
                            details: 'Query error.'
                        })
                    }
                    resolve(results);
                }
            );
        } catch (err) {
            reject({
                err,
                message: 'ERROR AT helper/query.helper.js',
                details: 'Connection error.'
            })
        } 
    });
}

module.exports = { query };