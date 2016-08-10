import React, { Component } from 'react';

class SpecHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">FeaturePad</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="navbar-form nav navbar-nav navbar-right">
              <button className="btn btn-default" id="share-button">Copy Link</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default SpecHeader;
