import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

//Collections
import { Specs } from '../../../imports/collections/specs';
import { Templates } from '../../../imports/collections/templates';

class EditSpec extends Component {
  onEditorChange(contentQuestion) {
    const newContent = this.refs[contentQuestion].value;

    Meteor.call('specs.updateContent', this.props.spec, contentQuestion, newContent);
  }

  renderList() {
    if(this.props.template) {
      return this.props.template.sections.map(contentQuestion => {
        return (
          <div key={contentQuestion}>
            <label>{contentQuestion}</label>
            <input
              ref={contentQuestion}
              value={this.props.spec.content[contentQuestion]}
              onChange={() =>
                this.onEditorChange(contentQuestion)
              }
            />
          </div>
        );
      });
    }
  }

  render() {
    console.log(this.props.spec);

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
