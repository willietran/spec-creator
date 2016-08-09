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

    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">FeaturePad</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
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
      </nav>
    );
  }
};

export default Header;
