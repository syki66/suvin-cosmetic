import React from "react";

import HomeCarousel from "../components/Home_Components/HomeCarousel";
import HomeHoverEffect from "../components/Home_Components/HomeHoverEffect";




export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeCarousel />
        <HomeHoverEffect />
      </div>
    );
  }
}
