import React from "react";

import "../embedStyles.css";

// import _ from "lodash";

class EmbedMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIframe: false
    };

    this.enablePreview = this.enablePreview.bind(this);
  }

  componentDidMount() {
    if (!window) {
      return;
    }
    this.renderEmbedly();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.showIframe !== this.state.showIframe &&
      this.state.showIframe === true
    ) {
      this.renderEmbedly();
    }
  }

  getScript() {
    const script = document.createElement("script");
    script.async = 1;
    script.src = "//cdn.embedly.com/widgets/platform.js";
    script.onload = () => {
      window.embedly();
    };
    document.body.appendChild(script);
  }

  renderEmbedly() {
    if (window.embedly) {
      window.embedly();
    } else {
      this.getScript();
    }
  }

  enablePreview() {
    this.setState({
      showIframe: true
    });
  }

  render() {
    const url = this.props.blockProps.src;
    const innerHTML = `<div><a class="embedly-card" href="${url}" data-card-controls="0">Embedded ― ${url}</a></div>`;
    return (
      <div className="md-block-atomic-embed">
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      </div>
    );
  }
}

export default EmbedMe;
