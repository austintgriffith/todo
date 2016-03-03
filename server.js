var http = require('http');
var fs = require("fs");
var _ = require("lodash");
var todoFile = "todo.json";
fs.access(todoFile, fs.F_OK, function(err) {
    if (err) {
        console.log(todoFile+" doesn't exist, creating a blank one...");
        fs.writeFileSync(todoFile,JSON.stringify([]));
    }
});
module.exports = {
  port:55556,
  init:function(app,http){
      console.log("Init...");

      app.get('/todos', function (req, res) {
           console.log("==Todos");
          res.send(fs.readFileSync(todoFile).toString());
      });
      app.get('/add/:todo', function (req, res) {
          console.log("==Add "+req.params.todo);
          var todos = JSON.parse(fs.readFileSync(todoFile).toString());
          todos.push({id:Date.now(),name:req.params.todo});
          var stringified = JSON.stringify(todos);
          res.send(stringified);
          fs.writeFile(todoFile,stringified)
      });
      app.get('/remove/:todoId', function (req, res) {
          console.log("==Remove "+req.params.todoId);
          var todos = JSON.parse(fs.readFileSync(todoFile).toString());
          var remainingTodos = [];
          _.forEach(todos,function(todo){
              if(todo.id!=req.params.todoId) remainingTodos.push(todo);
          });
          var stringified = JSON.stringify(remainingTodos);
          res.send(stringified);
          fs.writeFile(todoFile,stringified)
      });
  }
}
