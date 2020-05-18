import React, { Component } from "react";
// import styles from './embedBtnStyles.module.css';
import { convertToRaw } from "draft-js";
import { Field, FieldBody, Control, Input, Icon, Button } from "bloomer";
import { toast } from "react-toastify";

import * as colors from "../../../../constants/colors";

const isUrl = require("is-url");

export default class EmbedInput extends Component {
  state = {
    url: "",
    isUrl: false
  };

  addResource = () => {
    const { editorState, onChange } = this.props;
    onChange(this.props.modifier(editorState, { src: this.state.url }));
    const currentContent = this.props
      .modifier(editorState, { src: this.state.url })
      .getCurrentContent();
    const es = convertToRaw(currentContent);
    console.log("from button", es);
  };

  changeUrl = evt => {
    this.setState({ url: evt.target.value });
  };

  render() {
    return (
      <Field isHorizontal style={{ margin: 15 }}>
        <FieldBody>
          <Field isGrouped>
            <Control isExpanded hasIcons="left">
              <Input
                style={{
                  backgroundColor: "white",
                  minWidth: 400,
                  border: "none",
                  borderBottom: `1px solid ${colors.gris}`
                }}
                isMarginless
                placeholder="http://... (image, vidéo, page web...)"
                onChange={this.changeUrl}
                value={this.state.url}
              />
              <Icon isAlign="left" className="fa fa-code" />
            </Control>
          </Field>
        </FieldBody>
        <Button
          isMarginless
          isOutlined
          style={{ backgroundColor: "white", color: colors.noirfff }}
          onClick={() =>
            isUrl(this.state.url)
              ? this.addResource()
              : toast.error("L'adresse web n'est pas valide !")
          }
        >
          <Icon
            className="fa fa-arrow-right"
            style={{
              color: isUrl(this.state.url) ? colors.standard : colors.gris
            }}
          />
        </Button>
      </Field>
    );
  }
}
