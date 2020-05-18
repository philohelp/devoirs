import "./editor.scss";
import React from "react";

import Editor from "draft-js-plugins-editor";

import createEmbedlyPlugin from "./embed/embedlyPlugin";

import { buildEditorState } from "./editor_helpers";

const embedlyPlugin = createEmbedlyPlugin();

const plugins = [embedlyPlugin];

export default (props) => {
  const { content } = props;
  const editorState = buildEditorState(content);
  const manageChange = (value) => {
    // console.log(value);
  };
  return (
    <div style={{}}>
      {editorState && (
        <Editor
          editorState={editorState}
          plugins={plugins}
          textAlignment="justify"
          readOnly={true}
          onChange={manageChange}
        />
      )}
    </div>
  );
};
