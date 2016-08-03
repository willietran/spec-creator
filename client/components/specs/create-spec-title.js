import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CreateSpecTitle extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  onSubmitClick(event) {
    event.preventDefault;
    const specId = this.refs.specTitle.value;
    const { teamId } = this.props.params;

    Meteor.call('specs.insert',
      specId,
      teamId,
      (error) => {
        browserHistory.push("/" + teamId + "/specs/" + specId + "/edit/");
      }
    );
  }

  render() {
    return (
      <div>
        <label>Title</label>
        <input ref="specTitle" />
        <button
          onClick={this.onSubmitClick.bind(this)}
          className="btn btn-primary">
          Next
        </button>
      </div>
    );
  }
};

export default CreateSpecTitle;
