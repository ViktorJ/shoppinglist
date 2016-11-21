'use strict';

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    Item = require("./item.js");

const Items = React.createClass({
    renderItems: function(){
        let items = this.props.items.data;
        let itemsArray = [];
        let key = 0;

        let self = this;
        if(items){
            items.forEach(function (item){
                if(item.checked){
                    itemsArray.push(<Item key={key++} class="panel-body checked" check={self.props.checkItem.bind(self, item)} item={<del>{item.item}</del>} delete={self.props.submitDeleteItem.bind(self, item.key)} />);
                } else {
                    itemsArray.push(<Item key={key++} class="panel-body" check={self.props.checkItem.bind(self, item)} item={item.item} delete={self.props.submitDeleteItem.bind(self, item.key)} />);
                }

            });
        }

        return itemsArray.reverse();
    },
    signOut: function(){
      firebase.auth().signOut();
    },
    render: function(){
        return (
            <div className="items col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
