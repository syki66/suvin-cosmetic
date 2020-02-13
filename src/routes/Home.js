import React from "react";

import HomeCarousel from "../components/Home_Components/HomeCarousel";
import HomeHoverEffect from "../components/Home_Components/HomeHoverEffect";


import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="so_special">
        <HomeCarousel />
        <HomeHoverEffect />

      </div>
    );
  }
}
