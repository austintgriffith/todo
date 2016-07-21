import React from 'react';
var md5 = require("md5");

module.exports =  React.createClass({
    //----------------------------------------------------- render
    render: function(){
        var todoStyle = {
            cursor:'pointer',
            padding:5,
            fontSize:20,
            opacity:0.7
        };
        var todoPriority = 0.2;
        todoPriority += this.props.priority*0.1;
        var lastButton;
        if(!this.props.finished){
            lastButton = (
                <i onClick={this.props.handleRemove} name={this.props.id} className="fa fa-times-circle" style={todoStyle}></i>
            );
        }else{
            lastButton = (
                <span>
                    <i onClick={this.props.handleUnRemove} name={this.props.id} className="fa fa-reply" style={todoStyle}></i>
                    <i onClick={this.props.handleRealRemove} name={this.props.id} className="fa fa-times-circle" style={todoStyle}></i>
                </span>

            );
        }
        var hash = md5(this.props.name);
        var hashcolor = hashStringToColor(hash);

        var priorityString = "";
        for(var c=0;c<this.props.priority;c++){
            priorityString+=".";
        }

        return (
            <div style={{padding:10,border:'1px solid #EEEEEE',backgroundColor:hashcolor,marginBottom:15,opacity:todoPriority}}>

                <div style={{float:'left',marginLeft:-38,marginTop:-3}}>
                    {priorityString}
                </div>

                <div style={{float:'right',color:'#EEEEEE'}}>
                    <i onClick={this.props.handlePromote} name={this.props.id} className="fa fa-caret-square-o-up" style={todoStyle}></i>
                    <i onClick={this.props.handleDemote} name={this.props.id} className="fa fa-caret-square-o-down" style={todoStyle}></i>
                    {lastButton}
                </div>
                <div style={{fontWieght:'bold',color:'#EEEEEE'}}>{this.props.name}</div>
            </div>
        )
    }
});

function hashStringToColor(str) {
  var djb2 = require("djb2");
  var hash = djb2(str);
  var r = (hash & 0x660000) >> 16;
  var g = (hash & 0x006600) >> 8;
  var b = hash & 0x000066;
  return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}
