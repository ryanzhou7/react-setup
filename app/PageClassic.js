import React from "react";

export default class PageClassic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    return (
      <>
        <div> Count: {this.state.count} </div>
        <button onClick={this.increment}> increment </button>
        <button onClick={this.decrement}> decrement </button>
      </>
    );
  }
}
