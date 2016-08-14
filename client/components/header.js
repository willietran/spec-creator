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
    const currentUserName = this.props.currentUser.profile.name;

    return (
      <footer className="sidebar-footer">
        <ul className="list-style-none line-height-small">
          <li className="dropdown dropup">
            <Link
              to="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="footer-user-name">
                <span>{currentUserName}</span><span className="caret"></span>
              </div>
              <div className="footer-email small-font">
                <span>{currentUserEmail}</span>
              </div>
            </Link>
            <ul className="dropdown-menu">
              <li><a href="#">Reset Password</a></li>
              <li role="separator" className="divider"></li>
              <li>
                <Link
                  to="/login"
                  ref="logout"
                  onClick={this.onLogoutClick.bind(this)}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    );
  }
};

export default Header;
