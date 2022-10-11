import React, { Component } from "react";
class ColorChange extends Component() {
  constructor(props) {
    super(props);
    this.state = { precolor: "red", postcolor: "blue" };
  }
  render() {
    return (
      <div>
        <p
          id="p"
          onMouseOver={() =>
            (document.getElementById("p").style.color = this.state.precolor)
          }
          onMouseOut={() =>
            (document.querySelector("#p").style.color = this.state.postcolor)
          }
        >
          see the magic on moving mouse cursor here
        </p>
      </div>
    );
  }
}
export default ColorChange;
