'use strict';

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    Item = require("./item.js");

class Items extends React.Component {

    constructor(props){
      super(props);
      this.renderItems = this.renderItems.bind(this);
    }

    renderItems(){
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
    }

    signOut(){
      firebase.auth().signOut();
    }

    render(){
        return (
            <div className="items col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {this.renderItems()}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        submitDeleteItem: (key) => {
            dispatch(actions.submitDeleteItem(key));
        },
        checkItem: (item) => {
            dispatch(actions.checkItem(item));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Items);
