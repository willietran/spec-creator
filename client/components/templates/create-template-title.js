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
      (error, templateId, teamId) => {
        console.log(templateId);
        console.log(teamId);
        console.log(this.props);
        browserHistory.push("create-template/" + templateId);
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
