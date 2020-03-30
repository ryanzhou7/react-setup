import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToolTip from "./ToolTip";
import ToolTip2 from "./ToolTip2";
import ThemeToggler from "./ThemeToggler";
import { ThemeProvider } from "./ThemeContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",

      // method consumers will use to toggle the theme
      toggleTheme: () => {
        this.setState(({ theme }) => {
          return {
            theme: theme === "light" ? "dark" : "light"
          };
        });
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ToolTip text="hello">Hover over me for tool tip</ToolTip>
        <br />
        <br />
        <ToolTip2 text="hello">Hover over me for tool tip</ToolTip2>

        {/* Wrap what will be changing */}
        {/* Whatever we pass to value will be available to consumers */}
        <ThemeProvider value={this.state}>
          <ThemeToggler />
        </ThemeProvider>
        <ThemeProvider value={this.state}>
          <ThemeToggler />
        </ThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
