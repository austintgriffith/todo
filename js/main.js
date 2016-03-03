import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Todos from './todos.js';
var $ = require ('jquery')

var Main = React.createClass({

    //----------------------------------------------------- on load
    componentDidMount: function(){
        console.log("Loading todos backend...");
        $.get("/todos", function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //----------------------------------------------------- send todo
    sendTodo: function(todo){
        console.log("Send todo to backend:"+todo);
        $.get("/add/"+encodeURIComponent(todo), function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //----------------------------------------------------- send todo
    handleRemove: function(event){
        var todoId = event.target.getAttribute('name');
        $.get("/remove/"+todoId, function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //----------------------------------------------------- render
    render: function(){
        if(this.state){
            return (
                <div>
                    <Header sendTodo={this.sendTodo}/>
                    <Todos todos={this.state.todos} handleRemove={this.handleRemove}/>
                </div>
            )
        }else{
            return (
                <div>
                    Loading...
                </div>
            )
        }

    }

});

ReactDOM.render(<Main />, document.getElementById('app'));
