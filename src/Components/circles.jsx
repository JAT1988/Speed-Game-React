import React, { Component } from "react";

const images = ["zombie1.jpeg", "zombie2.jpeg", "zombie3.jpeg", "zombie4.jpeg"];

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "",
    };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const backgroundImage = `url(../Assets/zombiePics/${randomImage}) no-repeat center center/cover`;
    this.setState({ backgroundImage });
  }

  render() {
    return (
      <div className="circle" style={{ background: this.state.backgroundImage }}>
        {/* Your circle component JSX */}
      </div>
    );
  }
}

export default Circle;
