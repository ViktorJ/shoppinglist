'use strict';

let Redux = require('redux'),
    itemsReducer = require('./reducers/items'),
    thunk = require('redux-thunk'),
    initialState = require('./initialstate');

let reducers = Redux.combineReducers({
    items: itemsReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState);