import { Spinner } from "react-bootstrap";

import React from "react";

const Loading = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: 100,
        height: 100,
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loading;
