import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from './accounts.js';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Spec Creator</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <Link to="/create-team">Create Team</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Header;
