import "./editor.scss";
import React from "react";

import Editor from "draft-js-plugins-editor";
import { buildEditorState } from "./editor_helpers";

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
          readOnly={true}
          onChange={manageChange}
        />
      )}
    </div>
  );
};
