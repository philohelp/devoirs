import React, { useState } from "react";
import useDidMount from "@rooks/use-did-mount";
import { Storage } from "aws-amplify";
import pdfThumb from "./assets/images/pdf.png";

import * as colors from "./colors";

const getPdfLabel = (pdf) => {
  if (!pdf) {
    return "";
  }
  const pdfArray = pdf.split("/");
  if (pdfArray.length < 3) {
    return pdf;
  }
  const label = pdfArray[2];
  return label;
};

const PdfLink = (props) => {
  const { url, pdf } = props;
  return (
    <div style={{ display: "flex" }}>
      <a href={url} target="blank" rel="noopener">
        <img src={pdfThumb} alt="logo pdf" style={{ maxHeight: 35 }} />
      </a>
      <a
        href={url}
        target="blank"
        rel="noopener"
        style={{
          margin: 10,
          fontSize: 14,
          color: colors.gris,
        }}
      >
        {getPdfLabel(pdf)}
      </a>
    </div>
  );
};

export default (props) => {
  const { pdf } = props;
  const [url, setUrl] = useState(null);

  useDidMount(function () {
    Storage.get(pdf).then((result) => manageUrl(result));
  });

  const manageUrl = (res) => {
    setUrl(res);
  };
  return (
    <div>
      {url && (
        <div>
          <PdfLink url={url} pdf={pdf} />
        </div>
      )}
    </div>
  );
};
