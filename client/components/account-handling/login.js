import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {
  onSubmitClick(event) {
    event.preventDefault();
    const email = this.refs.registerEmail.value;
    const password = this.refs.registerPassword.value;

    Meteor.loginWithPassword(
      email,
      password,
      (error) => {
        if(error) {
          console.log(error.reason);
        } else {
          browserHistory.push("/");
        }

      }
    );


  }

  render() {
    return (
      <div>
        <h2 className="text-center">Sign in</h2>
          <div className="input-group text-center container">
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4">
                <input
                  className="form-control"
                  ref="registerEmail"
                  type="email"
                  placeholder="you@yourcompany.com"
                />
                <input
                  className="form-control"
                  ref="registerPassword"
                  type="password"
                  placeholder="(at least six characters)"
                />
                <button
                  className="btn btn-primary"
                  onClick={this.onSubmitClick.bind(this)}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Login;
