import React from 'react';
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-react-documenteditor';
import DocumentData from "./data";

class DocumentView extends React.Component {
  private documenteditorcontainer;

  onLoadDefault() {
    // load your default document here
    let data = DocumentData;
    // Open the default document
    this.documenteditorcontainer.documentEditor.open(data);
    //Enable read only mode.
    this.documenteditorcontainer.restrictEditing = true;
    console.log(this.documenteditorcontainer.documentEditor);
  }

  componentDidMount() {
    setTimeout(() => {
      this.onLoadDefault();
    });
  }

  render() {
    return (
      <DocumentEditorContainerComponent
        id="document-editor" ref={(scope) => { this.documenteditorcontainer = scope; this.onLoadDefault.bind(this); }}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        height={"590px"}
        enableToolbar={false}
      />
    );
  }
}

export default DocumentView;