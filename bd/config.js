const {Pool} = require('pg')

const config = {
    user:'postgres',
    host:'localhost',
    password:'3114',
    database:'blogApp'
}

const pool = new Pool(config);

module.exports = pool