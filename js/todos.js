import React from 'react';
import Todo from './todo.js';
module.exports =  React.createClass({
    //----------------------------------------------------- render
    render: function(){

        var todoArray = this.props.todos;
        todoArray.sort(function(a, b) {
            return parseInt(b.priority) - parseInt(a.priority);
        });
        console.log(todoArray);

        var todos = todoArray.map(function(todo){
            if(!todo.finished){
                return (
                    <Todo key={todo.id} {...todo} {...this.props} />
                );
            }
        }.bind(this));

        var finishedTodos = todoArray.map(function(todo){
            if(todo.finished){
                return (
                    <Todo key={todo.id} {...todo} {...this.props} />
                );
            }
        }.bind(this));

        return (
            <div>
                <div style={{paddingLeft:50,paddingTop:20}}>
                    {todos}
                </div>
                <div style={{opacity:0.15}}>------------------------------------------------------------------------------- </div>
                <div style={{paddingLeft:50,paddingTop:20,opacity:0.5}}>
                    {finishedTodos}
                </div>
            </div>
        )
    }
});
