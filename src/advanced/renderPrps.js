import React from "react";
import Cat from "./catCmpt";

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
          <h1>
            Move the mouse around !
          </h1>
          {/* <p>The current mouse positive is ({this.state.x},{this.state.y})</p> */}
          {/* <Cat mouse={this.state} /> */}
          {this.props.render(this.state)}
      </div>
    )
  }

}

export default MouseTracker
