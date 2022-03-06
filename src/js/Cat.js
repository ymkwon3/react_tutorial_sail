import React from "react";

const Cat = props => {
  console.log(props);
  return <div>{props.name}</div>;
};

export { Cat };
