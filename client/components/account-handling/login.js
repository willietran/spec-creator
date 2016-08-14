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
          browserHistory.push("/teams");
        }

      }
    );


  }

  render() {
    return (
      <div className="signup-container">
        <div className="split-pane-left">
          <h2 className="text-center lead-font top-margin-medium">Welcome Back!</h2>
          <div className="signup-input-group">
            <div className="row">
              <div className="col-xs-12">
                <div>
                  <label for="login-email" className="signup-label">Work Email</label>
                  <input
                    id="login-email"
                    className="form-control signup-field"
                    ref="registerEmail"
                    type="email"
                    placeholder="you@yourcompany.com"
                    required
                  />
                </div>
                <div>
                  <label for="login-password" className="signup-label">Password</label>
                  <input
                    id="login-password"
                    className="form-control signup-field"
                    ref="registerPassword"
                    type="password"
                    placeholder="(at least six characters)"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4">
                <button
                  className="btn btn-primary signup-button"
                  onClick={this.onSubmitClick.bind(this)}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
