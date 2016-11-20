'use strict';

let React = require("react");

const Welcome = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();

    },
    render: function(){
        return (
          <div className="row">
              <form onSubmit={this.handleSubmit}>
                  <label>
                  <div className="form-group col-xs-10 col-sm-10 col-md-10 col-lg-10">
                      <label>Email</label>
                      <input type="text" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group col-xs-10 col-sm-10 col-md-10 col-lg-10">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i></button>
              </form>
          </div>
        );
    }
});

module.exports = Welcome;
