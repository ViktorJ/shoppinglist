'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider,
    store = require('./store'),
    actions = require('./actions/actions'),
    Start = require('./components/start');


ReactDOM.render((
    <Provider store={store}>
        <Start />
    </Provider>
), document.getElementById('content'));

setTimeout(function(){
    store.dispatch(actions.listeningToItems());
});
