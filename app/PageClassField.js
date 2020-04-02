import React, { Component } from "react";

export default class PageClassField extends Component {
  // Refactoring to new TC39 proposed class field syntax
  state = {
    status: "off"
  };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       status: "off"
  //     };
  //     this.toggleState = this.toggleState.bind(this);
  //   }

  //   toggleState() {
  toggleState = () => {
    this.setState(prevState => {
      return {
        status: prevState.status === "off" ? "on" : "off"
      };
    });
  };

  render() {
    return (
      <div>
        Current state: {this.state.status}{" "}
        <button onClick={this.toggleState}>Toggle</button>
      </div>
    );
  }
}
