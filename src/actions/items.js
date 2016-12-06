'use strict';

let C = require('../constants'),
    firebaseRef = new Firebase(C.FIREBASE_URL),
    itemsRef = firebaseRef.child("items");


export function submitNewItem(item){
    return function(dispatch, getState){
        let newItem = {
            item: item,
            checked: false
        }
        itemsRef.push(newItem);
    }
}

export function checkItem(item){
    return function(dispatch, getState){
        if(item.checked){
            let newItem = {
                item: item.item,
                checked: false
            }
            itemsRef.child(item.key).update(newItem);
        } else {
            let newItem = {
                item: item.item,
                checked: true
            }
            itemsRef.child(item.key).update(newItem);
        }

    }
}

export function submitDeleteItem(key){
    return function(dispatch, getState){
        itemsRef.child(key).remove();
    }
}

export function listeningToItems(){
    return function(dispatch, getState){
        itemsRef.on("value", function(snapshot){
            let itemsArray = [];
            snapshot.forEach(function(item){
                let itemData = item.val();
                let key = item.key();
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
