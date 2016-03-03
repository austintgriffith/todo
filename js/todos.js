import React from 'react';
import Todo from './todo.js';
module.exports =  React.createClass({

    //----------------------------------------------------- render
    render: function(){
        var todos = this.props.todos.map(function(todo){
            return (
                <Todo key={todo.id} {...todo} handleRemove={this.props.handleRemove}/>
            );
        }.bind(this));
        return (
            <div style={{paddingLeft:50,paddingTop:20}}>
                {todos}
            </div>
        )
    }
});
