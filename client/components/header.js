import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from './accounts.js';

class Header extends Component {
  onLogoutClick(event) {
    event.preventDefault
    Meteor.logout();

    browserHistory.push("/login")
  }

  render() {
    const currentUserEmail = this.props.currentUser.emails[0].address;

    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/teams" className="navbar-brand">Spec Creator</Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {currentUserEmail} <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#">Reset Password</a></li>
              <li role="separator" className="divider"></li>
              <li>
                <a
                  href="#"
                  ref="logout"
                  onClick={this.onLogoutClick.bind(this)}
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Header;
