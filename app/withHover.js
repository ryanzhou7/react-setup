import React from "react";

export default function withHover(Component, propName = "hovering") {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hovering: false
      };
      this.mouseOver = this.mouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
    }
    mouseOver() {
      this.setState({
        hovering: true
      });
    }
    onMouseOut() {
      this.setState({
        hovering: false
      });
    }
    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      };
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.onMouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}
