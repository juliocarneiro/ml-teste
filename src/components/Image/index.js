import React, { Component } from "react";
import noImg from "../../utils/img/noimg.png";

class Image extends Component {
  state = { imageStatus: false };

  handleImageLoaded = () => {
    this.setState({ imageStatus: true });
  };

  handleImageErrored = () => {
    this.setState({ imageStatus: false });
  };

  render() {
    const { props, state } = this;
    return (
      <img
        src={state.imageStatus && props.src ? props.src : noImg}
        alt={props.alt}
        onLoad={this.handleImageLoaded}
        onError={this.handleImageErrored}
        style={{
          width: props.width ? `${props.width}` : "auto",
          height: props.height ? `${props.height}` : "auto",
          borderRadius: props.borderRadius ? `${props.borderRadius}` : "0"
        }}
        className={props.className ? props.className : ""}
      />
    );
  }
}

export default Image;
