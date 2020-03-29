import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToolTip from "./ToolTip";
import ToolTip2 from "./ToolTip2";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ToolTip text="hello">Hover over me for tool tip</ToolTip>
        <br />
        <br />
        <ToolTip2 text="hello">Hover over me for tool tip</ToolTip2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
