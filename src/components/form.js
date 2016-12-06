'use strict';

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions");

class Form extends React.Component {

    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        let item = this.refs.item.value;

        this.props.submitNewItem(item);

        this.refs.item.value = "";
    }

    render(){
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <input type="text" className="form-control" ref="item" />
                    </div>
                    <button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i></button>
                </form>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        items:state.items
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        submitNewItem: (item) => {
            dispatch(actions.submitNewItem(item));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Form);
