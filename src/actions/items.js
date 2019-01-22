'use strict';

let C = require('../constants'),
    firebaseRef = new Firebase(C.FIREBASE_URL),
    itemsRef = firebaseRef.child("items");


export function submitNewItem(item){
    return (dispatch, getState) => {
        const newItem = {
            item: item,
            checked: false
        }
        itemsRef.push(newItem);
    }
}

export function checkItem(item){
    return (dispatch, getState) => {
        let newItem = {};
        if(item.checked){
            newItem = {
                item: item.item,
                checked: false
            }
        } else {
            newItem = {
                item: item.item,
                checked: true
            }
        }
        itemsRef.child(item.key).update(newItem);
    }
}

export function submitDeleteItem(key){
    return (dispatch, getState) => {
        itemsRef.child(key).remove();
    }
}

export function listeningToItems(){
    return function(dispatch, getState){
        itemsRef.on("value", snapshot => {
            const itemsArray = [];
            snapshot.forEach(item => {
                const itemData = item.val();
                const key = item.key();
                    itemsArray.push({
                        item: itemData.item,
                        checked: itemData.checked,
                        key: key
                    });
            });
            dispatch({
                type: C.RECEIVE_ITEM,
                data: itemsArray
            });
        });
    }
}
