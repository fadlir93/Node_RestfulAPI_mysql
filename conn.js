let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'somethingnew'
});

con.connect(function(err) {
    if(err) throw err;
});

module.exports = con;