import React from "react";
import queryString from "query-string";

// React Router will pass props
export default function PageQuery(props) {
  const { value } = queryString.parse(props.location.search);

  const arr = [1, 2, 3];
  const divs = arr.map((e) => <div key={e}>{e}</div>);

  return (
    <>
      {divs}
      <div style={{ fontWeight: "bold" }}>Helllo</div>
      <div> value is {value}</div>
    </>
  );
}
