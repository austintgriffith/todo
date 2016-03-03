import React from 'react';
module.exports =  React.createClass({

    //----------------------------------------------------- render
    render: function(){
        return (
            <div style={{padding:10,border:'1px solid #EEEEEE',marginBottom:15}}>
                <div style={{float:'right'}}>
                    <i onClick={this.props.handleRemove} name={this.props.id} className="fa fa-times-circle" style={{cursor:'pointer',cursor:'hand'}}></i>
                </div>
                <b>{this.props.name}</b>
            </div>
        )
    }

});
