import React, { Component } from 'react';

class CreateSpecTitle extends Component {
  onTitleChange() {
    const newSpecTitle = this.refs.newSpecTitle.value;
    Meteor.call('specs.updateTitle', this.props.spec, newSpecTitle);
  }

  render() {
    return (
      <div className="row" id="editor-container">
        <div
          id="editor-page"
          className="max-width-825 min-width-500 center"
        >
          <input
            className="width-100 height-200 title-font"
            ref="newSpecTitle"
            value={this.props.spec.specTitle}
            onChange={this.onTitleChange.bind(this)}
            placeholder="Give me a name..."
          />
        </div>
      </div>
    );
  }
};

export default CreateSpecTitle;
