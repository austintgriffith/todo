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

    //-----------------------------------------------------
    sendTodo: function(todo){
        console.log("Send todo to backend:"+todo);
        $.get("/add/"+encodeURIComponent(todo), function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //-----------------------------------------------------
    handleRemove: function(event){
        var todoId = event.target.getAttribute('name');
        $.get("/remove/"+todoId, function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //-----------------------------------------------------
    handleUnRemove: function(event){
        var todoId = event.target.getAttribute('name');
        $.get("/unremove/"+todoId, function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //-----------------------------------------------------
    handleRealRemove: function(event){
        var todoId = event.target.getAttribute('name');
        $.get("/realremove/"+todoId, function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },


    //-----------------------------------------------------
    handlePromote: function(event){
        var todoId = event.target.getAttribute('name');
        $.get("/promote/"+todoId, function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //-----------------------------------------------------
    handleDemote: function(event){
        var todoId = event.target.getAttribute('name');
        $.get("/demote/"+todoId, function (result) {
            this.setState({
                todos: JSON.parse(result)
            });
        }.bind(this));
    },

    //----------------------------------------------------- render
    render: function(){
        if(this.state){
            return (
                <div style={{backgroundColor:'#FFFFFF'}}>
                    <Header sendTodo={this.sendTodo}/>
                    <Todos
                        todos={this.state.todos}
                        handleRemove={this.handleRemove}
                        handleUnRemove={this.handleUnRemove}
                        handleRealRemove={this.handleRealRemove}
                        handlePromote={this.handlePromote}
                        handleDemote={this.handleDemote}
                    />
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
