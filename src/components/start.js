'use strict';

let React = require('react'),
    Form = require('./form'),
    Items = require('./items'),
    Welcome = require('./welcome');

class Start extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      let self = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          self.setState({
            loggedIn : true
          });
        }
      });
    }

    render(){
        const loggedIn = this.state.loggedIn;
        return (
            <div>
            {loggedIn ? (
              <div>
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
}

module.exports = Start;
