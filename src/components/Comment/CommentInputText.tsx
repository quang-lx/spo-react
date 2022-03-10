import React from 'react';
import {} from "@fluentui/react-icons-northstar";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar as SyncToolbar,
  ToolbarSettingsModel,
  ToolbarType
} from '@syncfusion/ej2-react-richtexteditor';
import Tribute, {TributeItem} from "tributejs";

interface IMentionItem {
  key: string,
  value: string,
  email: string,
  id: number,
  avatar: string
}

class CommentInputText extends React.PureComponent {
  /** rteObj! : rteObj is always existed */
  private rteObj!: RichTextEditorComponent;
  onCreate() {
    const remoteSearch = (text, cb) => {
      var URL = "https://mocki.io/v1/80ffd3c4-0575-426f-8231-b9454a709b96";
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            cb(data)
          } else if (xhr.status === 403) {
            cb([])
          }
        }
      };
      xhr.open("GET", URL + "?q=" + text, true);
      xhr.send();
    }
    var tribute = new Tribute({
      trigger: '@',
      selectTemplate: function (item: TributeItem<IMentionItem>) {
        return `<span class="ui-text text-mention" uid="${item.original.id}">${item.original.key}</span>`;
      },
      allowSpaces: true,
      noMatchTemplate: function () {
        return `<span style="visibility: hidden;"></span>`;
      },
      menuItemTemplate: function (item: TributeItem<IMentionItem>) {
        return `
            <div class="mention__item">
              <div class="mention__itemmedia">
                <img src="${item.original.avatar}" alt="${item.original.key}">
              </div>
              <div class="mention__item__main">
                <div class="mention__item__headerWrapper">
                    <div class="mention__itemheader">${item.string}</div>
                </div>
                <div class="mention__item__contentWrapper">
                    <div class="mention__itemcontent">${item.original.email}</div>
                </div>
              </div>
            </div>
        `;
      },
      values: function (text, cb) {
        remoteSearch(text, users => cb(users));
      }
    });
    tribute.attach(this.rteObj.inputElement);
  }

  actionBeginEvent(args) {
    if (args.requestType === 'EnterAction') {
      args.cancel = true;
    }
  }

  toolbarSettings: ToolbarSettingsModel = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
    ],
    type: ToolbarType.Expand
  }

  render() {
    return (
      <RichTextEditorComponent
        ref={(richTextEditor: RichTextEditorComponent) => {
          this.rteObj = richTextEditor
        }}
        created={this.onCreate.bind(this)}
        actionBegin={this.actionBeginEvent.bind(this)}
        toolbarSettings={this.toolbarSettings}
        placeholder="Nhập nội dung thảo luận..."
      >
        <Inject services={[SyncToolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>
    )
  }
}

export default CommentInputText;