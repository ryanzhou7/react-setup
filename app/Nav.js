import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(187, 46, 31)"
};

const style = {
  marginRight: 10
};

export default function Nav() {
  return (
    <div>
      {/* Link doesn't allow us to pass active style, NavLink does */}
      <NavLink to="/" exact activeStyle={activeStyle} style={style}>
        Hello World
      </NavLink>

      <NavLink to="/theme" activeStyle={activeStyle} style={style}>
        Theme togglers
      </NavLink>

      <NavLink to="/tooltip" activeStyle={activeStyle} style={style}>
        Tooltip
      </NavLink>

      <NavLink to="/class-field" activeStyle={activeStyle} style={style}>
        Class field
      </NavLink>

      <NavLink to="/dynamic-import" activeStyle={activeStyle} style={style}>
        Dynamic Import
      </NavLink>

      {/* How to pass query string in path */}
      <NavLink
        activeStyle={activeStyle}
        style={style}
        to={{ pathname: "/query", search: "?value=1" }}
      >
        Query
      </NavLink>
    </div>
  );
}
