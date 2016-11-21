'use strict';

let React = require('react'),
    Form = require('./form'),
    Items = require('./items'),
    Welcome = require('./welcome');

const Start = React.createClass({
    getInitialState: function () {
      return { loggedIn: false };
    },
    componentDidMount: function () {
      let self = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          self.setState({
            loggedIn : true
          });
        }
      });
    },
    render: function(){
        let loggedIn = this.state.loggedIn;
        return (
            <div>
            {loggedIn ? (
              <div className="container">
              <Form />
              <Items />
              </div>
            ) : (
              <div className="container">
              <Welcome />
              </div>
            )}
            </div>
        );
    }
});

module.exports = Start;
