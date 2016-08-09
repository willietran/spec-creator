import React, { Component } from 'react';

class CreateSpecTitle extends Component {
  onTitleChange() {
    const newSpecTitle = this.refs.newSpecTitle.value;
    Meteor.call('specs.updateTitle', this.props.spec, newSpecTitle);
  }

  render() {

    return (
      <div>
        <label>Title</label>
        <input
          ref="newSpecTitle"
          value={this.props.spec.specTitle}
          onChange={this.onTitleChange.bind(this)}
        />
      </div>
    );
  }
};

export default CreateSpecTitle;
