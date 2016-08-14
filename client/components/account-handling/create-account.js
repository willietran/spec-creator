import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CreateAccount extends Component {
  onSubmitClick(event) {
    event.preventDefault();
    const name = this.refs.registerName.value;
    const email = this.refs.registerEmail.value;
    const password = this.refs.registerPassword.value;

    Accounts.createUser({
      profile: { name },
      email,
      password,
    }, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        browserHistory.push("/create-team");
      }
    });
  }

  render() {
    return (
      <div className="signup-container">
        <div className="split-pane-left">
          <h2 className="text-center lead-font top-margin-medium">Create your account</h2>
          <div className="signup-input-group">
            <div className="row">
              <div className="col-xs-12">
                <div>
                  <label for="signup-name" className="signup-label">Name</label>
                  <input
                    id="signup-name"
                    className="form-control signup-field"
                    ref="registerName"
                    type="name"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label for="signup-email" className="signup-label">Work Email</label>
                    <input
                      id="signup-email"
                      className="form-control signup-field"
                      ref="registerEmail"
                      type="email"
                      placeholder="you@yourcompany.com"
                      required
                    />
                </div>
                <div>
                  <label for="signup-password" className="signup-label">Password</label>
                  <input
                    id="signup-password"
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
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CreateAccount;
