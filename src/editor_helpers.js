import { EditorState, convertFromRaw } from "draft-js";

import { createEditorStateWithText } from "draft-js-plugins-editor";
import { convertToRaw } from "draft-js";

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const buildEditorState = (content) => {
  // console.log("received content", content);
  if (content === null || !content) {
    const edState = EditorState.createEmpty();
    return edState;
  }
  if (content && typeof content === "string") {
    if (IsJsonString(content)) {
      const parsedContent = JSON.parse(content);
      const edState = EditorState.createWithContent(
        convertFromRaw(parsedContent)
      );
      return edState;
    }
    const edState = createEditorStateWithText(content);
    return edState;
  }

  const edState = EditorState.createEmpty();
  return edState;
};

export const getStringifiedDraftContent = (editorstate) => {
  if (!editorstate) {
    return null;
  }
  const stringifiedDraftContent = JSON.stringify(
    convertToRaw(editorstate.getCurrentContent())
  );
  return stringifiedDraftContent;
};
