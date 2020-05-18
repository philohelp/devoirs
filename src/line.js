import React from "react";

import * as colors from "./colors";

const Line = ({ padding }) => {
  return (
    <div
      style={{
        marginTop: padding ? padding : 10,
        marginBottom: padding ? padding : 10,
        width: "100%",
        height: 1,
        backgroundColor: colors.grisf,
      }}
    />
  );
};

export default Line;
