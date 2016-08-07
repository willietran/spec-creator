import React, { Component } from 'react';

class EditSpec extends Component {
  onEditorChange(contentQuestion) {
    const newContent = this.refs[contentQuestion].value;

    Meteor.call('specs.updateContent',
      this.props.spec,
      contentQuestion,
      newContent
    );
  }

  renderList() {
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

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
};

export default EditSpec;
