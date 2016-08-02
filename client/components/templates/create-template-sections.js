import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collections
import { Templates } from '../../../imports/collections/templates';

class CreateTemplateSections extends Component {
  constructor(props) {
    super(props);
  }

  onSectionAdd(event) {
    event.preventDefault;

    const template = this.props.params.templateId;
    const newSection = this.refs.templateSection.value;
    Meteor.call('templates.addSection',
      template, newSection
    )
  };

  renderSectionList() {
    console.log(this.props.templates[0]);
    return this.props.templates.map(template => {
      return (
        <li>
          {template.sections}
        </li>
      )
    });
  };

  render() {
    return (
      <div>
        <div>
          <ul className="list-group">
            {this.renderSectionList()}
          </ul>
        </div>
        <div>
          <label>Add Section</label>
          <input ref="templateSection" className="input-group" type="text" />
          <button
            className="btn btn-primary"
            onClick={this.onSectionAdd.bind(this)}>
            Add Another Section
          </button>
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  Meteor.subscribe('templates');

  const { templateId } = props.params;
  return { templates: Templates.find({ _id: templateId }).fetch() };
}, CreateTemplateSections);
