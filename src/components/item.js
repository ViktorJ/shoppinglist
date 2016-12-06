'use strict';

let React = require("react");

class Item extends React.Component{
    render(){
        return (
            <div key={this.props.key} className="row">
                <div className="panel panel-default col-xs-10 col-sm-10 col-md-10 col-lg-10">                                                                 <div className={this.props.class} onClick={this.props.check}>
                        {this.props.item}
                    </div>
                </div>
                <button className="btn btn-primary panelbutton" onClick={this.props.delete}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        );
    }
}

module.exports = Item;
