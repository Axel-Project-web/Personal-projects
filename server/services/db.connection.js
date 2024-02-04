const mysql = require('mysql2');

function createConnection() {
    return new Promise((resolve, reject)=> {
        const connection = mysql.createConnection({
            port: 3306,
            user: 'root',
            password: 'admin',
            host: 'localhost',
            database: 'writeonme',
        });
        connection.connect(err => {
            if(err) return reject({
                err,
                message: 'ERROR AT db.connect.js'
            })
            resolve({
                connection, 
                endConnection: ()=> connection.end()
            })
        })
    })
}

module.exports = {createConnection};