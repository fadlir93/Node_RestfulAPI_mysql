var Person = require('./controller');

exports.create_a_person = function(req, res) {
    var new_person = new Person(req.body);
    //handles null error 
   if(!new_person.first_name || !new_person.last_name){

    res.status(400).send({ error:true, message: 'Please provide task/status' });
    } else{
        Person.createPerson(new_person, function(err, person) {
            if (err)
                res.send(err);
                res.json(person);
            });
        }
    };

exports.list_all_person = function(req, res) {
    Person.getAllPerson(function(err, person) {
        console.log('controller')
        if(err)
            res.send(err);
            res.send(person)
    })
}