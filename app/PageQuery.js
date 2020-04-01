import React from "react";
import queryString from "query-string";

// React Router will pass props
export default function PageQuery(props) {
  const { value } = queryString.parse(props.location.search);
  return <div> value is {value}</div>;
}
