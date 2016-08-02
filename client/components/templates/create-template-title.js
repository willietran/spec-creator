import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CreateTemplateTitle extends Component {
  constructor(props) {
    super(props);
  }

  onSubmitClick(event) {
    event.preventDefault;

    Meteor.call('templates.insert',
      this.refs.templateTitle.value,
      this.props.params.teamId,
      (error, templateId) => {
        const teamId = this.props.params.teamId;
        browserHistory.push("/" + teamId + "/templates/" + templateId);
    });
  }

  render() {
    return (
      <div>
        <label>What can we call this template?</label>
        <input ref="templateTitle" />
        <button
          onClick={this.onSubmitClick.bind(this)}
          className="btn btn-primary">
          Next
        </button>
      </div>
    );
  }
};

export default CreateTemplateTitle;
