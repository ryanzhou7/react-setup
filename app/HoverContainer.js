import React from "react";

export default class HoverContainer extends React.Component {
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
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.onMouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
