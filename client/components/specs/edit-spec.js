import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

//Collections
import { Specs } from '../../../imports/collections/specs';
import { Templates } from '../../../imports/collections/templates';

class EditSpec extends Component {
  onEditorChange(section) {
    const content = this.refs.problemInput.value;
    console.log(this.props.spec.content);
    Meteor.call('specs.updateContent', this.props.spec, section, content);
  }

  renderList() {
    if(this.props.template) {
      return this.props.template.sections.map(section => {
        return (
          <div key={section}>
            <label>{section}</label>
            <input
              ref="problemInput"
              value={this.props.spec.content}
              onChange={() =>
                this.onEditorChange(section)
              }
            />
          </div>
        );
      });
    }
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Your spec</h2>
        {this.renderList()}
      </div>
    );
  }
};

export default createContainer((props) => {
  const { specId } = props.params;
  Meteor.subscribe('specs');
  Meteor.subscribe('templates');

  return {
    spec: Specs.findOne(specId),
    template: Templates.findOne({ _id: 'dpGaZWcWLx3PqGgjH' })
  };
}, EditSpec);
