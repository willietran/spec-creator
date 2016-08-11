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
      <div>
        <h2 className="text-center">Create your account</h2>
          <div className="input-group text-center container">
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4">
                <input
                  className="form-control"
                  ref="registerName"
                  type="name"
                  placeholder="Your Full Name"
                />
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
                  Next
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  }
};

export default CreateAccount;
