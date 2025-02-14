import React, { Component } from "react";

// Class component
class Row extends Component {
  state = { title: "This is a row" };
  render() {
    return <div className="flex items-center h-full">{this.state.title}</div>;
  }
}

export default Row;
