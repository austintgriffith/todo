import React from 'react';
var $ = require ('jquery')
module.exports =  React.createClass({

    //----------------------------------------------------- init
    getInitialState: function(){
        return {newtodo:""}
    },

    //----------------------------------------------------- input change
    handleChange: function(event){
        this.setState({newtodo:event.target.value});
    },

    //----------------------------------------------------- watch for keys
    handleKeyUp: function(event){
        if(event.keyCode==13){
            var sendThisTodo = event.target.value;
            console.log("Send todo:"+sendThisTodo);
            this.setState({newtodo:""});
            this.props.sendTodo(sendThisTodo);
        }
    },

    //----------------------------------------------------- render
    render: function(){
        var divStyle = {
            fontSize:28,
            letterSpacing:-0.07,
            fontWeight:'bold',
            padding:20,
            marginTop:-10
        };
        var inputStyle = {
            width:'80%',
            border:'1px solid #E8E8E8',
            color:'#666666'
        };
        return (
            <div style={divStyle}>
                todo <input style={inputStyle} type='text' value={this.state.newtodo} onKeyUp={this.handleKeyUp} onChange={this.handleChange}></input>
            </div>
        )
    }
});
