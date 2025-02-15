import React, { Component } from "react";

// Class component
class Row extends Component {
  render() {
    return (
      <div className={`flex` + " " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
