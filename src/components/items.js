'use strict';

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions");
    
const Items = React.createClass({
    renderItems: function(){
        let items = this.props.items.data;
        let itemsArray = [];
        let key = 0;
        
        let self = this;
        if(items){
            items.forEach(function (item){
                if(item.checked){
                    itemsArray.push(<div key={key} className="row"><div className="panel panel-default col-sm-11 col-md-11 col-lg-11"><div key={key++} className="panel-body" onClick={self.props.checkItem.bind(self, item)}><del>{item.item}</del></div></div> <button className="btn btn-primary panelbutton" onClick={self.props.submitDeleteItem.bind(self, item.key)}><i className="fa fa-trash-o"></i></button></div>);
                } else {
                    itemsArray.push(<div key={key} className="row"><div className="panel panel-default col-sm-11 col-md-11 col-lg-11"><div key={key++} className="panel-body" onClick={self.props.checkItem.bind(self, item)}>{item.item}</div></div> <button className="btn btn-primary panelbutton" onClick={self.props.submitDeleteItem.bind(self, item.key)}><i className="fa fa-trash-o"></i></button></div>);
                }
                
            });
        }
                          
        return itemsArray.reverse();
    },
    render: function(){
        return (
            <div className="items col-sm-10 col-md-10 col-lg-10">
                {this.renderItems()}
            </div>
        );
    }
});

let mapStateToProps = function (state) {
    return {
        items: state.items
    };
};

let mapDispatchToProps = function (dispatch) {
    return {
        submitDeleteItem: function (key) {
            dispatch(actions.submitDeleteItem(key));
        },
        checkItem: function (item) {
            dispatch(actions.checkItem(item));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Items);