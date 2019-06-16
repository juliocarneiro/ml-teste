import React from "react";

import LoaderStyled from "./style";

const Loader = props => {
  return (
    <LoaderStyled className="animated fadeIn">
      <div
        id="loader"
        style={{
          border: `10px solid ${props.color}`,
          borderTop: "10px solid #eeeeee"
        }}
      />
    </LoaderStyled>
  );
};

export default Loader;
