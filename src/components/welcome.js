'use strict';

let React = require("react");

class Welcome extends React.Component{

    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();

        let email = this.refs.email.value;
        let password = this.refs.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            console.log('Wrong password.');
          } else {
            console.log(errorMessage);
          }
          console.log(error);
        });

        this.refs.email.value = "";
        this.refs.password.value = "";
    }

    render(){
        return (
          <div className="welcomeBox">
          <h1><i className="fa fa-shopping-cart" aria-hidden="true"></i> ShoppingList</h1>
          <div className="row">
              <form>
                  <div className="form-group col-xs-10 col-sm-10 col-md-10 col-lg-10">
                      <label>Email</label>
                      <input type="text" className="form-control" placeholder="Email" ref="email"/>
                  </div>
                  <div className="form-group col-xs-10 col-sm-10 col-md-10 col-lg-10">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" ref="password" />
                  </div>
              </form>
          </div>
          <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
          </div>
        );
    }
}

module.exports = Welcome;
