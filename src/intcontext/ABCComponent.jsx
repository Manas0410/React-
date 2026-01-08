import React from "react";
import { getData } from "./ContextEx";

const ABCComponent = () => {
  const data = getData();

  return <div>{data}</div>;
};

export default ABCComponent;
