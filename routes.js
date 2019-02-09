'use strict';
module.exports = function(app){
var todoList = require('./res')

app.route('/person')
    .post(todoList.create_a_person)
    .get(todoList.list_all_person)

app.route('/person/:personId')
    .get(todoList.read_a_person)
    .put(todoList.update_a_task)
}

