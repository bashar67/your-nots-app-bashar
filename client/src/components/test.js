import React from "react";

const test = (props) => {
  switch (props.step) {
    case 1:
      return <div>Success!</div>;
    case 2:
      return <div>Error!</div>;
    default:
      return <div>Loading...</div>;
  }
};

export default test;
