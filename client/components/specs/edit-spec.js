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
        <div className="row" id="editor-container">
          <div
            className="max-width-825 min-width-500 center"
          >
            <div key={contentQuestion}>
              <p className="lead-font">{contentQuestion}</p>
              <textarea
                contentEditable="true"
                className="width-100 response-font"
                ref={contentQuestion}
                value={this.props.spec.content[contentQuestion]}
                onChange={() =>
                  this.onEditorChange(contentQuestion)
                }
              />
            </div>
          </div>
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
