'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider,
    store = require('./store'),
    actions = require('./actions/actions'),
    Form = require('./components/form'),
    Items = require('./components/items');



ReactDOM.render((
    <Provider store={store}>
        <div className="container">
            <Form /> 
            <Items />
        </div>
    </Provider>
), document.getElementById('content'));

setTimeout(function(){
    store.dispatch(actions.listeningToItems());
});