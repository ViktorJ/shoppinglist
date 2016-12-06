'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const ItemsReducer = (state, action) => {
    switch (action.type) {
        case C.RECEIVE_ITEM:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state || initialState.items;
    }
};

module.exports = ItemsReducer;
