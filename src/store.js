'use strict';

let Redux = require('redux'),
    ItemsReducer = require('./reducers/items'),
    thunk = require('redux-thunk'),
    initialState = require('./initialstate');

let reducers = Redux.combineReducers({
    items: ItemsReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState);
