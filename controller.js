'use strict';

var connection = require('./conn');

var Person = function(person) {
    this.first_name = person.first_name;
    this.last_name = person.last_name;
}

Person.createPerson = function createPerson(newPerson, result) {
    connection.query('INSERT INTO person set ?', newPerson, function (err, res) {
        if(err) {
            console.log('error :', err);
            result(err, null);
        } else {
            console.log(res);
            result(null, newPerson)
        }
    })
}

Person.getAllPerson = function getAllPerson(result) {
    connection.query('SELECT * from person', function (err,res) {
        if(err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('Person :', res);
            result(null, res);
        }
    })
}

// exports.index = function(req, res) {
//     response.ok('Hello Nice to Meet you !', res)
// };

module.exports = Person;