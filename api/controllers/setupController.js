var Todos = require("../models/todoModel");

module.exports = function(app) {
    app.get("/api/setupTodos", function(req, res){
        // setup seed data
        var seedTodos = [
            {
                text: "Hoc node.js",
                isDone: false
            },
            {
                text: "Hoc Angular.js",
                isDone: false
            },
            {
                text: "Viet 1 ung dung hoan chinh",
                isDone: false
            }
        ];

        Todos.create(seedTodos, function(err, results){

            res.send(results);

        })
    });
}